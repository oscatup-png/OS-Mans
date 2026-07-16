# ✅ Checklist - PWA Setup

## Arquivos Prontos (baixar dos outputs)

- [ ] **index.html** - Formulário atualizado com referências PWA
- [ ] **manifest.json** - Configurações do app
- [ ] **service-worker.js** - Funcionalidade offline
- [ ] **INSTRUÇÕES_GITHUB.md** - Guia completo

---

## Preparação Local (seu computador)

- [ ] Criar pasta `OS-Mans` localmente
- [ ] Copiar os 3 arquivos para dentro
- [ ] Deletar arquivo `Index.html` se existir (usar `index.html` minúsculo)
- [ ] Testar localmente: Abrir `index.html` no navegador

---

## Upload para GitHub

- [ ] Clonar repositório: `git clone https://github.com/oscatup-png/OS-Mans.git`
- [ ] Copiar arquivos para raiz do repositório
- [ ] Fazer commit: `git add . && git commit -m "feat: PWA setup"`
- [ ] Fazer push: `git push origin main`

---

## Ativar GitHub Pages

- [ ] Ir em Settings → Pages
- [ ] Selecionar Branch: `main` ou `master`
- [ ] Selecionar Folder: `/ (root)`
- [ ] Clicar Save
- [ ] Aguardar 2-3 minutos

---

## Testar URL

- [ ] Acessar: https://oscatup-png.github.io/OS-Mans/
- [ ] Verificar se carrega o formulário (SEM erro 404)
- [ ] Testar em celular (Android ou iPhone)
- [ ] Clicar em instalar / adicionar à tela inicial

---

## Verificação Final

- [ ] Formulário carrega corretamente
- [ ] Botão de instalar aparece no navegador
- [ ] App funciona offline (fechar WiFi/4G)
- [ ] Ícone "OS" aparece na tela inicial do celular

---

## Troubleshooting

Se der erro 404:
- [ ] Verificar nome do arquivo: `index.html` (minúsculo!)
- [ ] Verificar se não existe `Index.html` (maiúsculo)
- [ ] Fazer Hard Refresh: `Ctrl+Shift+R`
- [ ] Aguardar 5 minutos para GitHub Pages processar
- [ ] Verificar se repositório é Public

Se não conseguir instalar:
- [ ] Abrir DevTools: `F12`
- [ ] Ir em Application → Manifest
- [ ] Verificar se manifest.json carregou
- [ ] Ir em Application → Service Workers
- [ ] Verificar se service-worker.js está "activated and running"

---

**Precisa de ajuda? Verifique o console do navegador (F12) para mensagens de erro!**
