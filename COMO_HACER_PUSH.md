# 🔑 AUTENTICACIÓN CON GITHUB

## OPCIÓN 1: Git Credential Manager (Recomendado)

Windows debería tener Git Credential Manager instalado. Cuando ejecutes:

```powershell
git push -u origin main
```

Se abrirá automáticamente una ventana del navegador para que inicie sesión en GitHub.

## OPCIÓN 2: Token Personal

Si la OPCIÓN 1 no funciona, necesitas un token:

1. Ve a: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Token name: `IntelliJ IDEA`
4. Marca: `repo`
5. Copia el token
6. Ejecuta:

```powershell
git config --global credential.helper store
git push -u origin main
```

Cuando pida usuario y password:
- Usuario: `mmbalbas1132`
- Password: `[Tu token]`

## OPCIÓN 3: Usar el script

```powershell
.\push-to-github.ps1
```

---

**¿Cuál prefieres? Para hacer el push automáticamente, necesito que ejecutes UNA de estas opciones.**

