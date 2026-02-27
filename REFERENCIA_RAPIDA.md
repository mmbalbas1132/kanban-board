# 🚀 REFERENCIA RÁPIDA: Comandos Git para GitHub

## 🎯 3 COMANDOS QUE NECESITAS EJECUTAR

Copia y ejecuta estos en PowerShell, uno por uno:

### 1️⃣ Conectar con GitHub
```powershell
git remote add origin https://github.com/TU_USUARIO/kanban-board.git
```
**Reemplaza `TU_USUARIO` con tu usuario de GitHub**

### 2️⃣ Verificar la conexión
```powershell
git remote -v
```
**Deberías ver dos líneas con tu URL**

### 3️⃣ Subir el código
```powershell
git push -u origin main
```
**Te pedirá autenticación (token, contraseña, o SSH)**

---

## 📝 COMANDOS ÚTILES PARA FUTUROS CAMBIOS

### Ver estado
```powershell
git status
```

### Añadir cambios
```powershell
git add .
```

### Hacer commit
```powershell
git commit -m "Descripción del cambio"
```

### Subir cambios
```powershell
git push
```

### Ver historial
```powershell
git log --oneline
```

### Crear rama
```powershell
git checkout -b feature/nombre-funcionalidad
```

### Cambiar de rama
```powershell
git checkout nombre-rama
```

### Subir rama nueva
```powershell
git push -u origin nombre-rama
```

---

## 🆘 SOLUCIÓN RÁPIDA DE PROBLEMAS

### Error: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/kanban-board.git
```

### Error: "failed to push some refs"
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "Authentication failed"
- Usa un **token de acceso personal** en lugar de contraseña
- O instala GitHub CLI: `winget install GitHub.cli; gh auth login`

### Quiero eliminar un archivo que subí
```powershell
git rm --cached archivo.txt
git commit -m "Remove file"
git push
```

### Quiero deshacer el último commit
```powershell
git reset --soft HEAD~1
```

---

## 🔑 AUTENTICACIÓN: 3 OPCIONES

### Opción 1: Token Personal (Recomendado)
1. Ve a: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Marca `repo`
4. Copia el token
5. Úsalo como password

### Opción 2: GitHub CLI (Más fácil)
```powershell
winget install GitHub.cli
gh auth login
```

### Opción 3: SSH (Para avanzados)
```powershell
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"
# Añade la clave pública a GitHub
git remote set-url origin git@github.com:TU_USUARIO/kanban-board.git
```

---

## 📋 CHECKLIST ANTES DE PUSH

- [ ] Repositorio creado en GitHub (https://github.com/new)
- [ ] URL copiada del repositorio
- [ ] Ejecuté: `git remote add origin ...`
- [ ] Verifiqué: `git remote -v`
- [ ] Ejecuté: `git push -u origin main`
- [ ] ✅ **LISTO!**

---

## 🌐 URLs IMPORTANTES

```
GitHub:              https://github.com
Crear repositorio:   https://github.com/new
Tokens de acceso:    https://github.com/settings/tokens
Claves SSH:          https://github.com/settings/keys
Mi perfil:           https://github.com/TU_USUARIO
Mi repositorio:      https://github.com/TU_USUARIO/kanban-board
Documentación Git:   https://git-scm.com/doc
Documentación GitHub: https://docs.github.com
```

---

## 💾 ESTRUCTURA DE DIRECTORIOS

```
Tu proyecto en GitHub:
lista_de_tareas/
├── .gitignore
├── README.md
├── INSTRUCCIONES_GITHUB.md
├── RESUMEN_GIT_FINAL.md
├── REFERENCIA_RAPIDA.md (este archivo)
├── index.html (frontend)
├── script.js
├── api.js
├── styles.css
└── server/
    ├── pom.xml
    ├── mvnw.cmd
    ├── src/ (código Java)
    ├── sql/ (scripts BD)
    ├── requests/ (ejemplos HTTP)
    ├── README_GITHUB.md
    └── GUIA_GITHUB.md
```

---

## ✅ CHECKLIST DE ARCHIVOS CREADOS

Archivos que he creado para ayudarte:

### En la raíz:
- ✅ `.gitignore` - Protección de archivos
- ✅ `INSTRUCCIONES_GITHUB.md` - Paso a paso
- ✅ `RESUMEN_GIT_FINAL.md` - Resumen ejecutivo
- ✅ `REFERENCIA_RAPIDA.md` - Este archivo

### En server/:
- ✅ `.gitignore` - Protección del backend
- ✅ `.env.example` - Plantilla de variables
- ✅ `application.yaml.example` - Plantilla segura
- ✅ `GUIA_GITHUB.md` - Guía detallada
- ✅ `README_GITHUB.md` - README profesional

---

## 🎯 TU CHECKLIST PERSONAL

Antes de ejecutar `git push`:

- [ ] Creé repositorio en GitHub
- [ ] Copié la URL: `https://github.com/...`
- [ ] Tengo preparado un token o GitHub CLI
- [ ] Estoy en el directorio correcto
- [ ] Ejecuté los 3 comandos principales
- [ ] Verifiqué que se subió correctamente

---

## 📞 NECESITO AYUDA

Consulta estos archivos en ESTE ORDEN:

1. **INSTRUCCIONES_GITHUB.md** - Para pasos visuales
2. **REFERENCIA_RAPIDA.md** - Este archivo (comandos)
3. **RESUMEN_GIT_FINAL.md** - Para detalles
4. **server/GUIA_GITHUB.md** - Para información técnica

---

## ⏱️ TIEMPO ESTIMADO

- Crear repositorio en GitHub: **2 minutos**
- Ejecutar comandos Git: **3 minutos**
- Total: **5 minutos**

---

## 🎉 ¡LISTO!

Tienes todo lo necesario. Solo ejecuta los 3 comandos y tu proyecto estará en GitHub.

**Buena suerte! 🚀**

