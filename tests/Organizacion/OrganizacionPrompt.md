"VARIABLES:
NAME = Organizacion

INSTRUCCIONES PRINCIPALES:
1. Genera una automatización con playwright.
2. El archivo debe de estar ubicado en: Automatizacion-spartaneDoIt\tests\NAME
3. El archivo debe de llamarse NAME.spec.ts

IMPORTANTE:
1. Para seleccionar un valor de un select: Utiliza una estrategia que garantice su selección.
2. En los select siempre pueden venir o más valores de los que te pasaré. Ten en cuenta eso al hacer la automatización.
3. Cuando te pida seleccionar un elemento por xpath siempre usa esta fórmula y solo cambia el texto, a menos que te indique un xpath específico: //span[contains(text(),""Secciones"")]
4. Siempre entra a la misma URL que ya viene en config antes de realizar el flujo para automatizar.
5. Cuando se te pida ingresar una fecha en un campo de tipo date, el formato siempre será ""dd/mm/aaaa"" utiliza la estrategia correcta para ingresar texto
6. Antes de ingresar texto en un input, siempre debes de limpiarlo primero.
7. No limpies ni sobrescribas los selects después de haberlos seleccionado y guardado.

FLUJO PARA INICIAR SESIÓN:
1. Ingresa el usuario ""joserodrigoingsis@gmail.com"" en el campo con ID username
2. Ingresa la contraseña ""$Admin123"" en el campo con ID password
3. Da clic en el botón con xpath //button[normalize-space()='Iniciar Sesión']

FLUJO PARA INGRESAR A Organización:
1. Iniciar Sesión
2. En el siguiente select, selecttionar el proyecto SmartGym Pro (SMP).
<select data-v-7b7cd6e5 class=""form-select project-picker"">
<option data-v-7b7cd6e5 value=""new"">Nuevo proyecto</option>
<option data-v-7b7cd6e5 value=""6181"">Gestor Integral de Citas Médicas (GICM)</option>
<option data-v-7b7cd6e5 value=""6182"">SmartGym Pro (SMP)</option>
</select>
3. Dar clic en el xpath Secciones 
4. Dar clic en el xpath //span[normalize-space()='2']
5. Validar que existe el xpath //h1[normalize-space()='Organización']

FLUJO PARA CERRAR SESIÓN:
1. Dar clic en el xpath //button[@id='userDropdown']
2. Dar clic en el xpath //a[normalize-space()='Cerrar sesión']

FLUJO PARA AUTOMATIZAR:
AUT-008 / ORGANIZACIÓN / Validar que se pueda ingresar a la sección Organización
1. Ingresar a Organización

AUT-009 / ORGANIZACIÓN / Validar el botón de Ver áreas participantes
1. Ingresar a Organización
2. Dar clic en el xpath //a[normalize-space()='Ver áreas participantes']
3. Validar que exista el xpath //h5[@id='allAreasModalLabel']

AUT-010 / ORGANIZACIÓN / Validar Guardado de Organización
1. Ingresar a Organización
2. Limpiar el input con ID sitioWeb
3. En el input con ID sitioWeb ingresar el texto ""https://www.smartgympro.com""
4. En el select seleccionar el valor de Salud
<select data-v-6c2bec4d id=""sector"" class=""form-select"" required aria-required=""true"" xpath=""1"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona un sector</option>
<option data-v-6c2bec4d value=""11"">Agricultura</option>
<option data-v-6c2bec4d value=""2"">Salud</option>
</select>
5.Limpiar el input con xpath //input[@id='ubicacion']
6. En el input con xpath //input[@id='ubicacion'] ingresar el texto ""México, CDMX, Paris, Francia, España, Madrid""
7. En el select seleccionar el valor de Pequeña
<select data-v-6c2bec4d id=""tamanoEmpresa"" class=""form-select"" required aria-required=""true"" xpath=""1"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona uno</option>
<option data-v-6c2bec4d value=""1"">Micro</option>
<option data-v-6c2bec4d value=""2"">Pequeña</option>
</select>
8. Limpiar el campo con ID productosServicios
9. En el campo con ID productosServicios ingresar ""Un gimnasio inteligente ofrece entrenamiento personalizado con tecnología avanzada, equipos con sensores que registran rendimiento y postura, aplicaciones que muestran rutinas y progreso en tiempo real, asesoramiento con inteligencia artificial que adapta planes según objetivos y nivel físico, integración con wearables para monitorear frecuencia cardíaca, calorías y sueño, membresías digitales con clases en línea, entrenamientos con realidad virtual o aumentada, servicios de nutrición personalizada, programas de bienestar integral, venta de suplementos y dispositivos inteligentes, áreas automatizadas, lockers inteligentes, acceso por reconocimiento facial, reservas mediante app y reportes de rendimiento físico enfocados en mejorar la experiencia del usuario y optimizar resultados.""
10. Limpiar el campo con ID sistemasReemplazar
11. En el campo con ID ingresar ""El proyecto propone el desarrollo de un software integral para gimnasios inteligentes que reemplace múltiples sistemas tradicionales actualmente utilizados de forma separada. Este sistema unificará la gestión de asistencias, membresías, pagos, reservas de clases, control de acceso, seguimiento de entrenamientos, planes de nutrición y comunicación con los usuarios. Con ello, se eliminará la dependencia de herramientas aisladas como hojas de cálculo, registros manuales, agendas físicas y aplicaciones externas de pago o control. El software centralizará toda la información en una sola plataforma digital, optimizando la administración del gimnasio, mejorando la experiencia del usuario y permitiendo un análisis más preciso del rendimiento, la rentabilidad y la fidelización de los clientes.""
12. Limpiar el campo con ID numeroEmpleados
13. En el campo con ID ingresar 150
14. En el select seleccionar el valor de $10M - $50M
<select data-v-6c2bec4d id=""facturacionAnual"" class=""form-select"" required aria-required=""true"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona uno</option>
<option data-v-6c2bec4d value=""1"">Menos de $1M</option>
<option data-v-6c2bec4d value=""4"">$10M - $50M</option>
</select>
15. En el select seleccionar el valor de $1M - $5M
<select data-v-6c2bec4d id=""presupuestoIT"" class=""form-select"" required aria-required=""true"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona uno</option>
<option data-v-6c2bec4d value=""1"">Menos de $100K</option>
<option data-v-6c2bec4d value=""4"">$1M - $5M</option>
</select>
16. Limpiar el input con id numeroUsuarios
17. En el input con ID numeroUsuarios ingresar ""55""
18. Limpiar el input con ID volumenTransacciones
19. En el input con ID volumenTransacciones ingresar ""3500""
20. Dar clic en el xpath //button[normalize-space()='Agregar Certificación']
21. Limpiar el campo con xpath //input[@placeholder='Ej: ISO 9001']
22. En el campo con xpath //input[@placeholder='Ej: ISO 9001'] ingresar ""ISO 9001""
23. Limpiar el campo con xpath //input[@placeholder='Ej: 001-2023']
24. En el campo con xpath //input[@placeholder='Ej: 001-2023'] ingresar ""001-2025""
25. En el campo date con xpath //input[@type='date'] ingresar ""01/01/2005""
26. Limpiar el campo con ID organigrama
27. En el campo con ID organigrama ingresar el texto ""Dirección General: responsable de definir la visión, objetivos y toma de decisiones estratégicas. Gerencia de Proyecto: coordina el desarrollo, supervisa plazos, recursos y cumplimiento de metas. Líder Técnico: encargado de la arquitectura del software, revisión de código y decisiones tecnológicas. Desarrolladores Backend: implementan la lógica, base de datos y APIs del sistema. Desarrolladores Frontend: diseñan la interfaz y experiencia del usuario. QA Tester: verifica la calidad del producto, realiza pruebas manuales y automatizadas. DevOps o Infraestructura: gestiona despliegues, servidores y seguridad. Gerencia de Producto: define las funcionalidades del software y estudia las necesidades del gimnasio y de los usuarios. Analista de Requerimientos: traduce las necesidades del cliente en especificaciones técnicas. Diseñador UX/UI: crea la experiencia visual y la usabilidad del sistema. Área Comercial: encargada de ventas, marketing y relación con gimnasios clientes. Ejecutivo de Ventas: promueve el software y cierra contratos. Marketing Digital: maneja la comunicación, redes sociales y campañas. Soporte Técnico y Atención al Cliente: brinda asistencia postventa, resuelve incidencias y capacita a los usuarios.""
28. Limpiar el campo con ID comitesJuntas
29. En el campo con ID comitesJuntas ingresar el texto ""El proyecto contará con una estructura de comités y juntas que garantice la coordinación, el seguimiento y la toma de decisiones efectiva. El Comité Directivo estará conformado por la Dirección General y la Gerencia de Proyecto, y será responsable de aprobar estrategias, presupuestos y avances clave. El Comité Técnico estará integrado por el Líder Técnico, desarrolladores, QA y DevOps, encargados de definir lineamientos tecnológicos, resolver bloqueos y asegurar la calidad del producto. El Comité de Producto reunirá a la Gerencia de Producto, el Analista de Requerimientos y el Diseñador UX/UI para definir nuevas funcionalidades, priorizar desarrollos y validar experiencias de usuario. El Comité Comercial incluirá a representantes de ventas, marketing y atención al cliente, enfocado en estrategias de posicionamiento, comunicación y soporte postventa. Finalmente, se realizarán Juntas de Seguimiento Semanales para revisar avances, detectar riesgos y coordinar tareas entre equipos, así como Juntas de Evaluación Mensuales para medir resultados, cumplimiento de objetivos y proponer mejoras continuas.""
30. Limpiar el campo con ID mapaProcesos
31. En el campo con ID mapaProcesos ingresar el texto ""El proceso inicia en el área Comercial, que identifica las necesidades del cliente y las comunica a la Gerencia de Producto. La Gerencia de Producto analiza los requerimientos, los valida con el cliente y los documenta junto con el Analista de Requerimientos. Esta información se transfiere a la Gerencia de Proyecto, que planifica el desarrollo y asigna tareas al equipo técnico. El Líder Técnico distribuye las actividades entre los Desarrolladores Backend, Frontend y el equipo de DevOps, asegurando la integración de todos los componentes. Paralelamente, el QA Tester recibe las versiones preliminares del software para realizar pruebas funcionales, de rendimiento y seguridad. Una vez validadas las pruebas, el Comité Técnico autoriza la implementación y el DevOps gestiona el despliegue en el entorno productivo. Posteriormente, el área de Soporte Técnico y Atención al Cliente capacita a los usuarios y gestiona incidencias o mejoras reportadas. La Gerencia de Proyecto consolida los resultados y los presenta al Comité Directivo, quien evalúa avances y define ajustes estratégicos. Finalmente, el área de Marketing y Ventas utiliza los resultados y retroalimentación del cliente para reforzar las estrategias comerciales, cerrando así el ciclo de mejora continua entre los departamentos.""
32. Dar clic en el xpath //button[normalize-space()='Agregar Horario']
33. En el select seleccionar el valor Jueves
<select data-v-6c2bec4d class=""form-select form-select-sm"" aria-label=""Seleccionar día de la semana"" xpath=""1"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona uno</option>
<option data-v-6c2bec4d value=""1"">Lunes</option>
<option data-v-6c2bec4d value=""4"">Jueves</option>
</select>
34. En el input con ID politicasSeguridad ingresar el texto ""Las políticas de seguridad existentes en el proyecto establecen lineamientos para proteger la información, los sistemas y la integridad de los usuarios. Todo acceso al software requerirá autenticación segura mediante contraseñas cifradas y, en casos administrativos, verificación en dos pasos. Los datos personales y financieros serán almacenados en bases de datos protegidas con encriptación de extremo a extremo y conexiones seguras HTTPS. Se limitarán los permisos de acceso según el rol del usuario para evitar manipulación indebida de información. El equipo técnico deberá aplicar actualizaciones de seguridad de manera periódica y realizar copias de respaldo automáticas. Queda prohibido el uso de dispositivos externos o software no autorizado en los entornos de desarrollo y producción. Además, todo intercambio de información entre departamentos se realizará por canales internos verificados, manteniendo registros de cambios y accesos. El personal será capacitado regularmente en buenas prácticas de ciberseguridad, confidencialidad de datos y respuesta ante incidentes, garantizando la protección continua del sistema y de la información de los clientes.""
35. Dar clic en el xpath //button[normalize-space()='Agregar Dato Crítico']
36. Escribir en el input con xpath //input[@placeholder='Ej: Datos de clientes'] el texto ""Datos de TI""
37. Escribir en el input con xpath //input[@placeholder='Ej: 10GB'] el texto ""15GB""
38. En el select seleccionar el valor de Mensual
<select data-v-6c2bec4d class=""form-select form-select-sm"" aria-label=""Seleccionar frecuencia de actualización"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona una</option>
<option data-v-6c2bec4d value=""1"">Tiempo Real</option>
<option data-v-6c2bec4d value=""2"">Diaria</option>
<option data-v-6c2bec4d value=""4"">Mensual</option>
</select>
39. Dar clic en el xpath //button[normalize-space()='Agregar Contacto']
40. En el input con xpath //input[@placeholder='Nombre completo'] ingresar el texto ""J Rodrigo Escutia Rios""
41. En el input con xpath //input[@placeholder='Ej: Administrador de Sistemas'] ingresar el texto ""QA Automatizador""
42. En el input con xpath //input[@placeholder='+52 55 1234 5678'] ingresar el texto ""5534874498""
43. Dar clic en el xpath //button[normalize-space()='Agregar Ubicación']
44. En el input con xpath //input[@placeholder='Ej: Oficina Central'] ingresar el texto ""Oficina de CDMX""
45. En el input con xpath //input[@placeholder='Dirección completa'] ingresar el texto ""Avenida Toluca, Colonia Michoacán, Mèxico, CDMX, CP: 55487""
46. En el select ingresar el valor Sucursal
<select data-v-6c2bec4d class=""form-select form-select-sm"" aria-label=""Seleccionar tipo de ubicación"">…</select>
<option data-v-6c2bec4d selected disabled>Selecciona uno</option>
<option data-v-6c2bec4d value=""1"">Oficina</option>
<option data-v-6c2bec4d value=""4"">Sucursal</option>
</select>
47. Dar clic en el xpath //button[normalize-space()='Agregar Sistema']
48. En el input con xpath //input[@placeholder='Ej: ERP Principal'] ingresar el texto ""CRM Principal""
49. En el input con xpath //input[@placeholder='Ej: SAP'] ingresar el texto ""AWS""
50. En el input con xpath //input[@placeholder='Ej: 2023.1'] ingresar el texto ""2005.1""
51. En el campo date con xpath //tbody/tr/td[4]/input[1] ingresar ""01/01/2006""
52. Dar clic en el botón //button[normalize-space()='Agregar Área Participante']
53. En el campo con ID areaNombre ingresar el texto ""Recursos Humanos""
54. En el campo con ID areaModulos ingresar el texto ""Encargados de la contratación del personal""
55. En el campo con ID areaRoles ingresar el texto ""Gerente de RH, Gerente de Nómina, Gerente de Contratación""
56. En el select seleccionar el valor de Baja
<select data-v-8fad241d class=""form-select"" id=""areaCriticidad"" required aria-required=""true"" xpath=""1"">…</select>
<option data-v-8fad241d value>Seleccionar nivel</option>
<option data-v-8fad241d value=""1"">Crítico</option>
<option data-v-8fad241d value=""4"">Baja</option>
</select>
57. En el input con ID areaProcesos ingresar el texto ""Procesamiento de contratación y de la nómina. Tomando en cuenta la productividad diaria""
58. Dar clic en el xpath //button[normalize-space()='Crear Área Participante']
59. Dar clic en el xpath //button[normalize-space()='Guardar Cambios']
60. Espera 10 segundos para garantizar que la información se guarda.
61. Cerrar sesión
62. Ingresar a Organización
63. Validar que exista el xpath //input[@id='sitioWeb']

AUT-011 / ORGANIZACIÓN / Validar eliminar información
1. Ingresar a Organización
2. Primero: limpiar todos los inputs en lo que anteriormente se ingresó información, no tomes en cuenta otros. Solo los que se ingresó información en el AUT-010
3. Dale clic al botón con xpath //button[@aria-label='Eliminar certificación']//i[@class='bi bi-trash']
4. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
5. Dale clic al botón con xpath //button[@aria-label='Eliminar horario']//i[@class='bi bi-trash']
6. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
7. Dale clic al botón con xpath //button[@aria-label='Eliminar dato crítico']//i[@class='bi bi-trash']
8.Dale clic al xpath //button[normalize-space()='Sí, eliminar']
9. Dale clic al botón con xpath //button[@aria-label='Eliminar contacto IT']//i[@class='bi bi-trash']
10. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
11. Dale clic al botón con xpath //button[@aria-label='Eliminar ubicación']//i[@class='bi bi-trash']
12. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
13. Dale clic al xpath //button[@aria-label='Eliminar sistema crítico']//i[@class='bi bi-trash']
14. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
15. Dale clic al xpath //button[@aria-label='Eliminar área participante']//i[@class='bi bi-trash']
16. Dale clic al xpath //button[normalize-space()='Sí, eliminar']
4. Dar clic en el xpath //button[normalize-space()='Guardar Cambios']
5. Espera 10 segundos para garantizar que la información se guarda.
6. Cerrar sesión
7. Ingresar a Organización
8. Validar que exista el xpath //input[@id='sitioWeb']"