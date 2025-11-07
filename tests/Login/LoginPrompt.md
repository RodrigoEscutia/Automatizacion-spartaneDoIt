"VARIABLES:
NAME = Login

0. Siempre entra a la misma URL que ya viene en config antes de realizar estos pasos.

1. Genera una automatización con playwright.
2. El archivo debe de estar ubicado en: Automatizacion-spartaneDoIt\tests\NAME
3. El archivo debe de llamarse NAME.spec.ts

FLUJO:
AUT-001 Iniciar sesión de manera correcta
1. Ingresa el usuario ""joserodrigoingsis@gmail.com"" en el campo con ID username
2. Ingresa la contraseña ""$Admin123"" en el campo con ID password
3. Da clic en el botón con xpath //button[normalize-space()='Iniciar Sesión']

AUT-002 Validar que no permita iniciar sesión sin contraseña
1. Ingresa el usuario ""joserodrigoingsis@gmail.com"" en el campo con ID username
2. Valida que no se puede dar clic al botón con xpath //button[normalize-space()='Iniciar Sesión']

AUT-003 Validar que no permita iniciar sesión sin correo electrónico
1. Ingresa la contraseña ""$Admin123"" en el campo con ID password
2. Valida que no se puede dar clic al botón con xpath //button[normalize-space()='Iniciar Sesión']"