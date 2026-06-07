# FOOD EVENTS.

> Operações de catering VIP para casamentos, galas e festas de empresa.
> Submarca da PROOF. · v0.1.0 · 2026

![Status](https://img.shields.io/badge/status-prot%C3%B3tipo-FF3B30?style=flat-square)
![Stack](https://img.shields.io/badge/stack-React%20%2B%20HTML-111318?style=flat-square)
![Licen%C3%A7a](https://img.shields.io/badge/licen%C3%A7a-privada-8A8E99?style=flat-square)

---

## Sobre

Plataforma de gestão operacional para catering VIP em eventos de grande escala. Agrega quatro perfis de acesso num único sistema:

- **Responsável** — vista consolidada de eventos, equipa, pipeline financeiro.
- **Gestor de Evento** — briefing, timeline, checklist operacional, planta de sala.
- **Cliente** — zona dedicada por evento com menu, pagamentos, aprovações e conversa directa.
- **Logística** — ordens de compra, rede de fornecedores, stock do hub, rotas de distribuição.

Este repositório é o **protótipo de alta-fidelidade** (v0.1). Sem persistência, sem autenticação real, dados fictícios.

---

## Stack

Single-file HTML com React via CDN. Sem build step, sem Node, sem dependências a instalar.

- React 18 (UMD)
- Babel Standalone (compilação JSX em runtime)
- Lucide Icons (via CDN)
- Tipografia Google Fonts: Archivo, IBM Plex Mono, Fraunces

Escolha deliberada: para um protótipo deste tamanho, um build pipeline Vite/Next acrescenta complexidade sem valor. Se avançar para produção, migra-se para Next.js 15 + Supabase (ver secção *Evolução*).

---

## Deploy no Vercel

### Opção 1 — interface web (mais rápida)

1. Criar repositório novo no GitHub com estes ficheiros.
2. Em [vercel.com/new](https://vercel.com/new), importar o repositório.
3. Framework Preset: **Other** (estático).
4. Root Directory: `./`
5. Build Command: vazio (deixar em branco).
6. Output Directory: `./`
7. Deploy.

### Opção 2 — CLI

```bash
npm i -g vercel
vercel
# aceitar os defaults
vercel --prod
```

O domínio padrão será `food-events.vercel.app`. Para domínio próprio (ex: `foodevents.pt`) → Vercel Dashboard → Settings → Domains.

---

## Estrutura

```
food-events-app/
├── index.html          # Aplicação completa (React single-file)
├── favicon.svg         # Ícone do browser
├── vercel.json         # Config Vercel + headers de segurança
├── .gitignore
└── README.md
```

---

## Branding

Segue o sistema **PROOF.** na íntegra. Pontos de identidade:

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#111318` | Fundo dominante (70%) |
| `--paper` | `#E8EAF0` | Tipografia primária |
| `--signal` | `#FF3B30` | Acento único — máximo 2% do ecrã |
| `--grey` | `#2A2D36` | Bordas, divisores |

**Regras inegociáveis:**
- Caixa alta + ponto final no wordmark (`FOOD EVENTS.`)
- Zero `border-radius`
- Zero gradientes, zero sombras suaves
- Signal só em focus, 1 CTA por ecrã, alertas críticos
- Rodapé de assinatura em todos os ecrãs

Documentação completa do sistema em `PROOF.md` (pedir à equipa).

---

## Roadmap — evolução para produção

### v0.2 — integração real
- [ ] Autenticação por magic link (Supabase Auth)
- [ ] Links únicos assinados para zona cliente (sem criar conta)
- [ ] Persistência em Postgres via Supabase
- [ ] Row-Level Security por perfil

### v0.3 — operação
- [ ] Editor de planta de sala (drag & drop) com `fabric.js`
- [ ] Assinatura digital de deliverables
- [ ] Upload de ficheiros (contratos, fotos, BEOs)
- [ ] Notificações por email (Resend)

### v0.4 — financeiro
- [ ] Integração SIBS / Stripe para pagamentos
- [ ] Emissão de facturas (AT/SAF-T)
- [ ] Relatórios financeiros exportáveis

### v1.0 — produção
- [ ] Migração para Next.js 15 + TypeScript
- [ ] Tests (Vitest + Playwright)
- [ ] Monitorização (Sentry)
- [ ] Analytics (Plausible)
- [ ] Compliance RGPD completo

---

## Desenvolvimento local

Abrir `index.html` directamente no browser. Não precisa de servidor.

Para servidor local (recomendado para desenvolvimento):

```bash
# Python
python3 -m http.server 3000

# Node
npx serve .
```

Abrir em `http://localhost:3000`.

---

## Licença

Privado · © 2026 FOOD EVENTS. · Desenhado pela PROOF.

---

**FOOD EVENTS. · CASE 000 · v0.1.0 · 2026.04.19 · by PROOF.**
