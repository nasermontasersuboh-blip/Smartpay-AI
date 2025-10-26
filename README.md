# SmartPay AI — Arc + USDC (Bilingual EN/AR)

**Pitch (EN):** AI decides *when/why* to pay; Arc + USDC executes *how*.
**النبذة (AR):** الذكاء الاصطناعي يقرر متى ولماذا تتم الدفعة، بينما تقوم Arc وUSDC بتنفيذها.

## Live (Render — Free)
1) Push to GitHub (public).
2) render.com → New → **Blueprint** → select this repo (reads `render.yaml`).
3) Deploy → open your URL (e.g., https://smartpay-ai.onrender.com).

## Run locally
```bash
npm install
npm start
# open http://localhost:3000
```

## API
POST `/analyze-payment` with `{ amount, type }` where type is `single` or `subscription`.

## Devpost (EN)
Title: SmartPay AI — AI-driven USDC payments on Arc
Description: AI policy engine returns payment decisions (“Approved”, “Auto-approve”, “Send for review”). In production, this authorizes Arc USDC transfers.
Demo: Use the live link. Try 1200/single → “Send for review”; 50/subscription → “Auto-approve”.
Tech: Node/Express, Joi, Helmet/CORS; Arc + USDC ready.

## Devpost (AR)
العنوان: SmartPay AI — مدفوعات USDC ذكية على Arc
الوصف: يقيّم SmartPay AI سياق الدفعة ويصدر قرارًا (“موافَق عليه”، “موافقة تلقائية”، أو “مراجعة”). في الإنتاج يتم تفويض دفعات USDC على Arc.
العرض: افتح الرابط الحي وجرّب 1200/دفعة واحدة → “مراجعة”، 50/اشتراك → “موافقة تلقائية”.
التقنيات: Node/Express وJoi وHelmet/CORS، مع تصميم للاتصال بـ Arc + USDC.

## Optional security
Set `API_KEY` environment variable and call API with header `x-api-key`.

## License
MIT
