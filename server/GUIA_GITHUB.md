# 📦 GUÍA: Qué Subir y Qué NO Subir a GitHub

## ✅ ARCHIVOS QUE SÍ DEBES SUBIR

### Archivos de código fuente
- ✅ `src/**/*.java` - Todo el código Java
- ✅ `src/main/resources/static/**` - CSS, JS, imágenes
- ✅ `src/main/resources/templates/**` - Vistas Thymeleaf
- ✅ `src/main/resources/application.yaml.example` - Plantilla de configuración

### Archivos de configuración del proyecto
- ✅ `pom.xml` - Dependencias Maven
- ✅ `mvnw.cmd` - Maven Wrapper para Windows
- ✅ `.gitignore` - Exclusiones de Git
- ✅ `README.md` o `README_GITHUB.md` - Documentación

### Scripts y utilidades
- ✅ `sql/*.sql` - Scripts de base de datos
- ✅ `start-server.ps1` - Script para iniciar servidor
- ✅ `stop-server.ps1` - Script para detener servidor
- ✅ `requests/*.http` - Ejemplos de peticiones HTTP

### Documentación
- ✅ `*.md` - Archivos Markdown de documentación
- ✅ Licencia, Contributing, etc.

---

## ❌ ARCHIVOS QUE NO DEBES SUBIR

### Archivos compilados y build
- ❌ `target/` - Directorio de compilación Maven
- ❌ `*.class` - Clases compiladas
- ❌ `*.jar` - Archivos JAR compilados
- ❌ `*.war` - Archivos WAR
- ❌ `build/` - Otros directorios de build

### Archivos del IDE
- ❌ `.idea/` - Configuración de IntelliJ IDEA
- ❌ `*.iml` - Módulos de IntelliJ
- ❌ `.vscode/` - Configuración de VS Code
- ❌ `.eclipse/` - Configuración de Eclipse
- ❌ `.settings/` - Configuración de Eclipse

### Archivos de configuración con datos sensibles
- ❌ `src/main/resources/application.yaml` - Contiene contraseñas
- ❌ `src/main/resources/application.properties` - Si lo usas
- ❌ `.env` - Variables de entorno
- ❌ `application-local.yaml` - Configuraciones locales

### Archivos del sistema
- ❌ `.DS_Store` - macOS
- ❌ `Thumbs.db` - Windows
- ❌ `desktop.ini` - Windows

### Dependencias descargadas
- ❌ `.m2/repository/` - Dependencias Maven (local)
- ❌ `node_modules/` - Si usas Node.js
- ❌ `.mvn/wrapper/maven-wrapper.jar` - JAR del wrapper

### Logs y temporales
- ❌ `*.log` - Archivos de log
- ❌ `logs/` - Directorio de logs
- ❌ `*.tmp` - Archivos temporales
- ❌ `*.swp` - Archivos de Vim

---

## 🔐 IMPORTANTE: Proteger Información Sensible

### Tu archivo `application.yaml` contiene:

```yaml
spring:
  datasource:
    username: root
    password:          # ← CONTRASEÑA (aunque esté vacía)
```

### ⚠️ NUNCA subas:
- Contraseñas de bases de datos
- API keys
- Tokens de autenticación
- Certificados privados
- Información personal

### ✅ SOLUCIÓN:

1. **Usa `application.yaml.example`**:
   ```yaml
   spring:
     datasource:
       username: root
       password: # CAMBIAR: Coloca tu contraseña aquí
   ```

2. **En el `.gitignore`** ya está configurado para ignorar:
   ```
   # application.yaml  ← Descomenta esta línea si quieres ignorarlo
   ```

3. **En el README** indica:
   ```markdown
   ## Configuración
   1. Copia `application.yaml.example` a `application.yaml`
   2. Edita `application.yaml` con tus credenciales
   ```

---

## 📋 CHECKLIST ANTES DE SUBIR A GITHUB

Antes de hacer tu primer push, verifica:

- [ ] Existe `.gitignore` en la raíz del proyecto
- [ ] `target/` está en `.gitignore`
- [ ] `.idea/` está en `.gitignore`
- [ ] `application.yaml` NO contiene contraseñas reales O está en `.gitignore`
- [ ] Existe `application.yaml.example` como plantilla
- [ ] README.md está actualizado con instrucciones claras
- [ ] Scripts SQL no contienen datos sensibles
- [ ] No hay archivos `.class` o `.jar` en el repositorio
- [ ] Los archivos `.http` no contienen tokens reales

---

## 🚀 COMANDOS PARA SUBIR A GITHUB

### Primera vez (nuevo repositorio):

```bash
# 1. Inicializar Git
git init

# 2. Añadir archivos
git add .

# 3. Revisar qué se va a subir
git status

# 4. Commit inicial
git commit -m "Initial commit: Kanban Board Application"

# 5. Conectar con GitHub (crea el repo en GitHub primero)
git remote add origin https://github.com/TU_USUARIO/kanban-board.git

# 6. Subir
git push -u origin main
```

### Si ya existe el repositorio local:

```bash
# 1. Verificar estado
git status

# 2. Añadir archivos nuevos
git add .

# 3. Commit
git commit -m "feat: Add kanban board features"

# 4. Push
git push
```

---

## 🔍 VERIFICAR QUÉ SE VA A SUBIR

Antes de hacer commit, verifica:

```bash
# Ver archivos que se van a añadir
git status

# Ver archivos ignorados
git status --ignored

# Ver diferencias
git diff

# Simular qué archivos se añadirían
git add --dry-run .
```

---

## 🛠️ LIMPIAR ARCHIVOS YA TRACKEADOS

Si por error ya subiste archivos que deberían estar ignorados:

```bash
# Remover del tracking sin borrar el archivo
git rm --cached target/ -r
git rm --cached .idea/ -r
git rm --cached src/main/resources/application.yaml

# Commit los cambios
git commit -m "chore: Remove ignored files from tracking"

# Push
git push
```

---

## 📊 RESUMEN VISUAL

```
Tu Proyecto
│
├── ✅ src/            → SUBIR (código fuente)
├── ✅ pom.xml         → SUBIR (configuración Maven)
├── ✅ sql/            → SUBIR (scripts SQL)
├── ✅ requests/       → SUBIR (ejemplos HTTP)
├── ✅ .gitignore      → SUBIR (configuración Git)
├── ✅ README.md       → SUBIR (documentación)
├── ✅ mvnw.cmd        → SUBIR (Maven Wrapper)
├── ✅ *.ps1           → SUBIR (scripts PowerShell)
│
├── ❌ target/         → NO SUBIR (build)
├── ❌ .idea/          → NO SUBIR (IDE)
├── ❌ .mvn/           → NO SUBIR (Maven local)
├── ❌ *.class         → NO SUBIR (compilados)
├── ❌ *.log           → NO SUBIR (logs)
└── ⚠️  application.yaml → CUIDADO (contraseñas)
```

---

## 💡 MEJORES PRÁCTICAS

1. **Revisa siempre** antes de hacer commit:
   ```bash
   git diff --cached
   ```

2. **Usa commits descriptivos**:
   ```bash
   git commit -m "feat: Add task priority feature"
   git commit -m "fix: Resolve database connection issue"
   git commit -m "docs: Update README with setup instructions"
   ```

3. **Haz commits frecuentes** pero significativos

4. **Usa branches** para nuevas funcionalidades:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

5. **Mantén actualizado** tu `.gitignore`

---

## 📞 ¿Dudas?

Si no estás seguro sobre un archivo:
- Si es generado automáticamente → NO SUBIR
- Si contiene contraseñas/tokens → NO SUBIR
- Si es código fuente → SUBIR
- Si es documentación → SUBIR
- Si es configuración → SUBIR (pero sin datos sensibles)

---

✅ **Ahora estás listo para subir tu proyecto a GitHub de forma segura!**

