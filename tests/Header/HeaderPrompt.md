"VARIABLES:
NAME = Header

INSTRUCCIONES PRINCIPALES:
1. Genera una automatización con playwright.
2. El archivo debe de estar ubicado en: Automatizacion-spartaneDoIt\tests\NAME
3. El archivo debe de llamarse NAME.spec.ts

IMPORTANTE:
1. Para seleccionar un valor de un select: Utiliza una estrategia que garantice su selección.
2. En los select siempre pueden venir o más valores de los que te pasaré. Ten en cuenta eso al hacer la automatización.
3. Cuando te pida seleccionar un elemento por xpath siempre usa esta fórmula y solo cambia el texto, a menos que te indique un xpath específico: //span[contains(text(),""Secciones"")]
4. Siempre entra a la misma URL que ya viene en config antes de realizar el flujo para automatizar.

FLUJO PARA INICIAR SESIÓN:
1. Ingresa el usuario ""joserodrigoingsis@gmail.com"" en el campo con ID username
2. Ingresa la contraseña ""$Admin123"" en el campo con ID password
3. Da clic en el botón con xpath //button[normalize-space()='Iniciar Sesión']

FLUJO PARA AUTOMATIZAR:
AUT-004 / HEADER / Validar que se pueda seleccionar el proyecto SmartGym Pro (SMP)
1. Iniciar Sesión
2. En el siguiente select, selecttionar el proyecto SmartGym Pro (SMP).
<select data-v-7b7cd6e5 class=""form-select project-picker"">
<option data-v-7b7cd6e5 value=""new"">Nuevo proyecto</option>
<option data-v-7b7cd6e5 value=""6181"">Gestor Integral de Citas Médicas (GICM)</option>
<option data-v-7b7cd6e5 value=""6182"">SmartGym Pro (SMP)</option>
</select>
3. Dar clic en el xpath Secciones 
4. Dar clic en el xpath //span[normalize-space()='1']
5. Validar que existe el xpath //h1[normalize-space()='Proyecto']

AUT005 / HEADER / Validar que el botón Estatus de generación redireccione de manera correcta
1. Iniciar Sesión
2. Dar clic en el xpath //button[@title='Sincronizar Cambios']
3. Validar que existe el xpath //h1[normalize-space()='Estatus de Generación']

AUT006 / HEADER / Validar que el menú Secciones funciona de manera correcta
1. Iniciar Sesión
2. Dar clic en el xpath Secciones 
3. Validar que existe el xpath //span[normalize-space()='1']

AUT007 / HEADER / Validar que el botón idiomas muestra Español, Inglés y Francés
1. Iniciar Sesión
2. Dar clic en el xpath //button[@id='languageDropdown']
3. Validar que existen los siguientes xpath
//a[normalize-space()='Español']
//a[normalize-space()='English']
//a[normalize-space()='Français']

AUT008 / HEADER / Validar cierre de Sesión
1. Iniciar Sesión
2. Dar clic en el xpath //div[@class='user-avatar me-2']
3. Dar clic en el xpath //a[normalize-space()='Cerrar sesión']
4. Validar que existe el xpath //h1[normalize-space()='Iniciar Sesión']"