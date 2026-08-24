// AFRI AI - Assistant Guide
const KNOWLEDGE={
"kyc":"KYC = 1 USDT / 600 FCFA / 15 ADH / 5 SDA. Tu envoies Recto/Verso/Selfie + preuve paiement dans pay.html?type=kyc. Après tu peux poster illimité.",
"vip":"VIP BOOST = 5 USDT / 3000 FCFA / 25 ADH par mois. Ta boutique passe en haut du market.html avec bordure dorée + ventes boostées.",
"fcfA":"Oui on accepte FCFA! Dans pay.html choisis Mobile Money FCFA: Orange Money, MTN, Moov, Wave. Numéro marchand: +225 07 49 123 456. 600 FCFA = KYC, 3000 FCFA = VIP.",
"gratuit":"Sans KYC tu peux poster max 3 produits et ils sont en bas du marché sans visibilité. Acheteur sans KYC = preview 30 sec seulement.",
"retrait":"Retrait = 2% commission CTO. Dans market.html en bas, mets ton shop + montant + méthode (USDT, ADH, FCFA, M-Pesa, PayPal). Traitement 24h.",
"commission":"Commission vente 5% en ADH natif pour le CTO sur chaque vente. Tu reçois 95%.",
"shop":"Ton lien shop c'est shop.html?u=TONNOM. Partage ce lien à tes clients.",
"paiement":"On accepte TOUT: ADH, SDA, ZMAF, USDT, BTC, FCFA (Orange/MTN/Wave), M-Pesa RDC, PayPal, Visa, MasterCard, Virement Rawbank."
};
function afriAI(q){
 q=q.toLowerCase();
 if(q.includes('fcf')||q.includes('orange')||q.includes('mtn')||q.includes('wave')) return KNOWLEDGE.fcfA;
 if(q.includes('kyc')) return KNOWLEDGE.kyc;
 if(q.includes('vip')||q.includes('boost')) return KNOWLEDGE.vip;
 if(q.includes('retrait')||q.includes('retirer')) return KNOWLEDGE.retrait;
 if(q.includes('gratuit')||q.includes('3 produit')||q.includes('sans kyc')) return KNOWLEDGE.gratuit;
 if(q.includes('commission')||q.includes('frais')) return KNOWLEDGE.commission+" "+KNOWLEDGE.retrait;
 if(q.includes('shop')||q.includes('boutique')||q.includes('lien')) return KNOWLEDGE.shop;
 if(q.includes('pay')||q.includes('payer')||q.includes('mode')) return KNOWLEDGE.paiement;
 return "Salut ! Je suis AFRI AI 🤖 Je peux t'aider sur: KYC (1 USDT), VIP BOOST (5 USDT), Paiement FCFA/M-Pesa/USDT, Retrait 2%, Commission 5%, Lien shop. Pose ta question !";
}
(function(){
 let w=document.createElement('div');w.innerHTML=`<div id="afriBtn" style="position:fixed;bottom:18px;right:18px;background:linear-gradient(90deg,#3b82f6,#22c55e);width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:9999;box-shadow:0 4px 15px rgba(0,0,0,.4);font-size:26px">🤖</div>
 <div id="afriBox" style="display:none;position:fixed;bottom:85px;right:12px;width:300px;max-width:92vw;background:#0f172a;border:1px solid #334155;border-radius:16px;z-index:9999;overflow:hidden"><div style="background:#1e293b;padding:10px;font-weight:bold">AFRI AI - Guide 24/7 <span id="afriClose" style="float:right;cursor:pointer">✖</span></div><div id="afriChat" style="height:280px;overflow-y:auto;padding:10px;font-size:13px"><div style="background:#1e293b;padding:8px;border-radius:10px;margin:6px 0">Salut Boss ! 👋 Je suis l'IA d'AFRI HUB. Demande-moi comment payer en FCFA, c'est quoi KYC/VIP, comment retirer, etc.</div></div><div style="display:flex;padding:8px;border-top:1px solid #334155"><input id="afriIn" placeholder="Tape ta question..." style="flex:1;padding:8px;border-radius:8px;border:1px solid #334155;background:#020617;color:#fff"><button id="afriSend" style="margin-left:6px;background:#3b82f6;color:#fff;border:none;border-radius:8px;padding:8px 12px">➤</button></div></div>`;
 document.body.appendChild(w);
 document.getElementById('afriBtn').onclick=()=>document.getElementById('afriBox').style.display='block';
 document.getElementById('afriClose').onclick=()=>document.getElementById('afriBox').style.display='none';
 function send(){let i=document.getElementById('afriIn');let q=i.value;if(!q)return;let c=document.getElementById('afriChat');c.innerHTML+=`<div style="text-align:right;margin:6px"><span style="background:#3b82f6;padding:6px 10px;border-radius:12px;display:inline-block">${q}</span></div>`;let r=afriAI(q);setTimeout(()=>{c.innerHTML+=`<div style="background:#1e293b;padding:8px;border-radius:10px;margin:6px 0">${r}</div>`;c.scrollTop=c.scrollHeight},400);i.value='';}
 document.getElementById('afriSend').onclick=send;
 document.getElementById('afriIn').addEventListener('keydown',e=>{if(e.key==='Enter')send()});
})();
