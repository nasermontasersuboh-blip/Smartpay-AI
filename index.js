// SmartPay AI – minimal backend (Express) — EN + AR demo
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Joi from "joi";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// Optional API key (set API_KEY env var if needed)
const API_KEY = process.env.API_KEY || "";
app.use((req,res,next)=>{
  if (!API_KEY) return next();
  if (req.path === "/" || req.path === "/health") return next();
  if (req.get("x-api-key") !== API_KEY) return res.status(401).json({error:"unauthorized"});
  next();
});

const schema = Joi.object({
  amount: Joi.number().positive().required(),
  type: Joi.string().valid("single","subscription").required()
});

function decide({ amount, type }) {
  if (amount > 1000) return "Send for review";
  if (type === "subscription") return "Auto-approve";
  return "Approved";
}

app.get("/health", (_req,res)=> res.json({ok:true}));
app.post("/analyze-payment", (req,res)=>{
  const { error, value } = schema.validate(req.body || {});
  if (error) return res.status(400).json({ error: error.message });
  res.json({ decision: decide(value) });
});

// Serve UI
app.use(express.static(__dirname));
app.get("/", (_req,res)=> res.sendFile(path.join(__dirname,"index.html")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`🚀 SmartPay AI server running on port ${PORT}`));
