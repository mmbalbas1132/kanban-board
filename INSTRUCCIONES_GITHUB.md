# 🚀 INSTRUCCIONES RÁPIDAS: Subir a GitHub

## ✅ Lo que ya está hecho:
- [x] Repositorio Git inicializado
- [x] .gitignore configurado
- [x] Commit inicial creado (58 archivos)
- [x] Rama `main` configurada

## 📋 Lo que TÚ debes hacer ahora:

### 1️⃣ Crear Repositorio en GitHub (2 minutos)

1. Abre tu navegador y ve a: **https://github.com/new**

2. Rellena el formulario:
   ```
   Repository name: kanban-board
   Description: Aplicación Kanban Full Stack con Spring Boot y JavaScript
   Visibilidad: ○ Public  ○ Private (elige el que prefieras)
   
   ⚠️ NO marques estas opciones:
   ☐ Add a README file
   ☐ Add .gitignore
   ☐ Choose a license
   ```

3. Click en el botón verde: **"Create repository"**

---

### 2️⃣ Conectar tu Código Local con GitHub

Después de crear el repositorio, GitHub te mostrará una página con comandos.

**Copia tu URL del repositorio** (algo como):
```
https://github.com/TU_USUARIO/kanban-board.git
```

**Abre PowerShell en IntelliJ** (Terminal en la parte inferior) y ejecuta:

```powershell
# Asegúrate de estar en el directorio correcto
cd C:\Users\mmbal\WebstormProjects\lista_de_tareas

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario real)
git remote add origin https://github.com/TU_USUARIO/kanban-board.git

# Verificar la conexión
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/kanban-board.git (fetch)
origin  https://github.com/TU_USUARIO/kanban-board.git (push)
```

---

### 3️⃣ Subir el Código a GitHub

```powershell
# Subir todo el código
git push -u origin main
```

**¿Te pide autenticación?** Tienes 3 opciones:

#### Opción A: Token de Acceso Personal (Recomendado)

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token (classic)"
3. Dale un nombre: "IntelliJ IDEA"
4. Selecciona permisos: `repo` (marca toda la sección)
5. Click en "Generate token"
6. **COPIA EL TOKEN** (solo lo verás una vez)
7. Cuando Git pida password, pega el token

#### Opción B: GitHub CLI (Más fácil)

```powershell
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticar (abrirá navegador)
gh auth login

# Ahora vuelve a intentar el push
git push -u origin main
```

#### Opción C: SSH (Para usuarios avanzados)

```powershell
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu_email@ejemplo.com"

# Copiar la clave pública
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard

# Ve a GitHub → Settings → SSH and GPG keys → New SSH key
# Pega la clave

# Cambiar la URL del remote a SSH
git remote set-url origin git@github.com:TU_USUARIO/kanban-board.git

# Push
git push -u origin main
```

---

### 4️⃣ Verificar en GitHub

1. Ve a tu repositorio: `https://github.com/TU_USUARIO/kanban-board`
2. Deberías ver:
   - ✅ 58 archivos subidos
   - ✅ Tu `README.md` mostrándose en la página principal
   - ✅ Carpetas: `server/`, archivos HTML, JS, CSS
   - ✅ Documentación y guías

---

## 🎉 ¡Listo!

Una vez completado el paso 3, tu proyecto estará en GitHub y podrás:
- Compartir el enlace con otros
- Clonar el proyecto en otras máquinas
- Colaborar con otros desarrolladores
- Usar GitHub Actions para CI/CD

---

## 📝 Comandos para Futuros Cambios

Cuando hagas cambios en el proyecto:

```powershell
# Ver qué archivos cambiaron
git status

# Añadir los cambios
git add .

# Hacer commit
git commit -m "Descripción de tus cambios"

# Subir a GitHub
git push
```

---

## 🆘 Si Algo Sale Mal

### Error: "remote origin already exists"
```powershell
# Eliminar el remote y añadirlo de nuevo
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/kanban-board.git
```

### Error: "failed to push some refs"
```powershell
# Si el repositorio en GitHub tiene archivos que no tienes localmente
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: "Authentication failed"
- Usa un token de acceso personal (no tu contraseña de GitHub)
- O usa GitHub CLI: `gh auth login`

---

## 📞 Resumen de URLs Importantes

1. **Crear repositorio**: https://github.com/new
2. **Tokens de acceso**: https://github.com/settings/tokens
3. **Configurar SSH**: https://github.com/settings/keys
4. **Tu repositorio** (después de crearlo): https://github.com/TU_USUARIO/kanban-board

---

✅ **Sigue estos pasos en orden y tu proyecto estará en GitHub en menos de 5 minutos!**

