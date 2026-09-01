#!/bin/bash
# CLEAN//ONE - Script para previsualizar la página

echo "🚀 Iniciando servidor de previsualización para CLEAN//ONE..."
echo ""
echo "📍 Abre tu navegador en: http://localhost:8080"
echo "📍 O usa la IP de tu red local"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Cambiar al directorio del proyecto
cd "$(dirname "$0")"

# Iniciar servidor Python
python3 -m http.server 8080