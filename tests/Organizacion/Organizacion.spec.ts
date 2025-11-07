import { test, expect, Page } from '@playwright/test';

const URL = 'https://spartane.ai/doit/auth/login';
const USER = 'joserodrigoingsis@gmail.com';
const PASS = '$Admin123';

async function iniciarSesion(page: Page) {
  await page.goto(URL);
  await page.fill('#username', '');
  await page.fill('#username', USER);
  await page.fill('#password', '');
  await page.fill('#password', PASS);
  await page.click("//button[normalize-space()='Iniciar Sesión']");
}

async function ingresarAOrganizacion(page: Page) {
  await iniciarSesion(page);
  const select = page.locator('select.project-picker');
  await expect(select).toBeVisible();
  await select.selectOption({ label: 'SmartGym Pro (SMP)' });
  await expect(select).toHaveValue('6182');
  await page.click("//span[contains(text(),'Secciones')]");
  await page.click("//span[normalize-space()='2']");
  await expect(page.locator("//h1[normalize-space()='Organización']")).toBeVisible();
}

async function cerrarSesion(page: Page) {
  await page.click("//button[@id='userDropdown']");
  await page.click("//a[normalize-space()='Cerrar sesión']");
}

async function limpiarYEscribirSiExiste(page: Page, selector: string, texto: string) {
  const el = page.locator(selector);
  if (await el.count() > 0) {
    await el.fill('');
    await el.fill(texto);
  }
}

async function escribirFecha(page: Page, selector: string, fecha: string) {
  const el = page.locator(selector);
  if (await el.count() > 0) {
    await el.fill('');
    await el.type(fecha);
  }
}

test.describe('ORGANIZACIÓN', () => {
  test('AUT-008 / ORGANIZACIÓN / Validar que se pueda ingresar a la sección Organización', async ({ page }) => {
    await ingresarAOrganizacion(page);
  });

  test('AUT-009 / ORGANIZACIÓN / Validar el botón de Ver áreas participantes', async ({ page }) => {
    await ingresarAOrganizacion(page);
    await page.click("//a[normalize-space()='Ver áreas participantes']");
    await expect(page.locator("//h5[@id='allAreasModalLabel']")).toBeVisible();
  });
  test('AUT-010 / ORGANIZACIÓN / Validar Guardado de Organización', async ({ page }) => {
    await ingresarAOrganizacion(page);
    await limpiarYEscribirSiExiste(page, '#sitioWeb', 'https://www.smartgympro.com');
    await page.selectOption('#sector', { label: 'Salud' });
    await limpiarYEscribirSiExiste(page, "#ubicacion", 'México, CDMX, Paris, Francia, España, Madrid');
    await page.selectOption('#tamanoEmpresa', { label: 'Pequeña' });
    await limpiarYEscribirSiExiste(page, '#productosServicios', 'Un gimnasio inteligente ofrece entrenamiento personalizado con tecnología avanzada, equipos con sensores que registran rendimiento y postura, aplicaciones que muestran rutinas y progreso en tiempo real, asesoramiento con inteligencia artificial que adapta planes según objetivos y nivel físico, integración con wearables para monitorear frecuencia cardíaca, calorías y sueño, membresías digitales con clases en línea, entrenamientos con realidad virtual o aumentada, servicios de nutrición personalizada, programas de bienestar integral, venta de suplementos y dispositivos inteligentes, áreas automatizadas, lockers inteligentes, acceso por reconocimiento facial, reservas mediante app y reportes de rendimiento físico enfocados en mejorar la experiencia del usuario y optimizar resultados.');
    await limpiarYEscribirSiExiste(page, '#sistemasReemplazar', 'El proyecto propone el desarrollo de un software integral para gimnasios inteligentes que reemplace múltiples sistemas tradicionales actualmente utilizados de forma separada. Este sistema unificará la gestión de asistencias, membresías, pagos, reservas de clases, control de acceso, seguimiento de entrenamientos, planes de nutrición y comunicación con los usuarios. Con ello, se eliminará la dependencia de herramientas aisladas como hojas de cálculo, registros manuales, agendas físicas y aplicaciones externas de pago o control. El software centralizará toda la información en una sola plataforma digital, optimizando la administración del gimnasio, mejorando la experiencia del usuario y permitiendo un análisis más preciso del rendimiento, la rentabilidad y la fidelización de los clientes.');
    await limpiarYEscribirSiExiste(page, '#numeroEmpleados', '150');
    await page.selectOption('#facturacionAnual', { label: '$10M - $50M' });
    await page.selectOption('#presupuestoIT', { label: '$1M - $5M' });
    await limpiarYEscribirSiExiste(page, '#numeroUsuarios', '55');
    await limpiarYEscribirSiExiste(page, '#volumenTransacciones', '3500');
    await page.click("//button[normalize-space()='Agregar Certificación']");
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: ISO 9001']", 'ISO 9001');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: 001-2023']", '001-2025');
    await escribirFecha(page, "//input[@type='date']", '01/01/2005');
    await limpiarYEscribirSiExiste(page, '#organigrama', 'Dirección General: responsable de definir la visión, objetivos y toma de decisiones estratégicas. Gerencia de Proyecto: coordina el desarrollo, supervisa plazos, recursos y cumplimiento de metas. Líder Técnico: encargado de la arquitectura del software, revisión de código y decisiones tecnológicas. Desarrolladores Backend: implementan la lógica, base de datos y APIs del sistema. Desarrolladores Frontend: diseñan la interfaz y experiencia del usuario. QA Tester: verifica la calidad del producto, realiza pruebas manuales y automatizadas. DevOps o Infraestructura: gestiona despliegues, servidores y seguridad. Gerencia de Producto: define las funcionalidades del software y estudia las necesidades del gimnasio y de los usuarios. Analista de Requerimientos: traduce las necesidades del cliente en especificaciones técnicas. Diseñador UX/UI: crea la experiencia visual y la usabilidad del sistema. Área Comercial: encargada de ventas, marketing y relación con gimnasios clientes. Ejecutivo de Ventas: promueve el software y cierra contratos. Marketing Digital: maneja la comunicación, redes sociales y campañas. Soporte Técnico y Atención al Cliente: brinda asistencia postventa, resuelve incidencias y capacita a los usuarios.');
    await limpiarYEscribirSiExiste(page, '#comitesJuntas', 'El proyecto contará con una estructura de comités y juntas que garantice la coordinación, el seguimiento y la toma de decisiones efectiva. El Comité Directivo estará conformado por la Dirección General y la Gerencia de Proyecto, y será responsable de aprobar estrategias, presupuestos y avances clave. El Comité Técnico estará integrado por el Líder Técnico, desarrolladores, QA y DevOps, encargados de definir lineamientos tecnológicos, resolver bloqueos y asegurar la calidad del producto. El Comité de Producto reunirá a la Gerencia de Producto, el Analista de Requerimientos y el Diseñador UX/UI para definir nuevas funcionalidades, priorizar desarrollos y validar experiencias de usuario. El Comité Comercial incluirá a representantes de ventas, marketing y atención al cliente, enfocado en estrategias de posicionamiento, comunicación y soporte postventa. Finalmente, se realizarán Juntas de Seguimiento Semanales para revisar avances, detectar riesgos y coordinar tareas entre equipos, así como Juntas de Evaluación Mensuales para medir resultados, cumplimiento de objetivos y proponer mejoras continuas.');
    await limpiarYEscribirSiExiste(page, '#mapaProcesos', 'El proceso inicia en el área Comercial, que identifica las necesidades del cliente y las comunica a la Gerencia de Producto. La Gerencia de Producto analiza los requerimientos, los valida con el cliente y los documenta junto con el Analista de Requerimientos. Esta información se transfiere a la Gerencia de Proyecto, que planifica el desarrollo y asigna tareas al equipo técnico. El Líder Técnico distribuye las actividades entre los Desarrolladores Backend, Frontend y el equipo de DevOps, asegurando la integración de todos los componentes. Paralelamente, el QA Tester recibe las versiones preliminares del software para realizar pruebas funcionales, de rendimiento y seguridad. Una vez validadas las pruebas, el Comité Técnico autoriza la implementación y el DevOps gestiona el despliegue en el entorno productivo. Posteriormente, el área de Soporte Técnico y Atención al Cliente capacita a los usuarios y gestiona incidencias o mejoras reportadas. La Gerencia de Proyecto consolida los resultados y los presenta al Comité Directivo, quien evalúa avances y define ajustes estratégicos. Finalmente, el área de Marketing y Ventas utiliza los resultados y retroalimentación del cliente para reforzar las estrategias comerciales, cerrando así el ciclo de mejora continua entre los departamentos.');
    await page.click("//button[normalize-space()='Agregar Horario']");
    await page.selectOption('select[aria-label="Seleccionar día de la semana"]', { label: 'Jueves' });
    await limpiarYEscribirSiExiste(page, '#politicasSeguridad', 'Las políticas de seguridad existentes en el proyecto establecen lineamientos para proteger la información, los sistemas y la integridad de los usuarios. Todo acceso al software requerirá autenticación segura mediante contraseñas cifradas y, en casos administrativos, verificación en dos pasos. Los datos personales y financieros serán almacenados en bases de datos protegidas con encriptación de extremo a extremo y conexiones seguras HTTPS. Se limitarán los permisos de acceso según el rol del usuario para evitar manipulación indebida de información. El equipo técnico deberá aplicar actualizaciones de seguridad de manera periódica y realizar copias de respaldo automáticas. Queda prohibido el uso de dispositivos externos o software no autorizado en los entornos de desarrollo y producción. Además, todo intercambio de información entre departamentos se realizará por canales internos verificados, manteniendo registros de cambios y accesos. El personal será capacitado regularmente en buenas prácticas de ciberseguridad, confidencialidad de datos y respuesta ante incidentes, garantizando la protección continua del sistema y de la información de los clientes.');
    await page.click("//button[normalize-space()='Agregar Dato Crítico']");
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: Datos de clientes']", 'Datos de TI');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: 10GB']", '15GB');
    await page.selectOption('select[aria-label="Seleccionar frecuencia de actualización"]', { label: 'Mensual' });
    await page.click("//button[normalize-space()='Agregar Contacto']");
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Nombre completo']", 'J Rodrigo Escutia Rios');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: Administrador de Sistemas']", 'QA Automatizador');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='+52 55 1234 5678']", '5534874498');
    await page.click("//button[normalize-space()='Agregar Ubicación']");
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: Oficina Central']", 'Oficina de CDMX');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Dirección completa']", 'Avenida Toluca, Colonia Michoacán, Mèxico, CDMX, CP: 55487');
    await page.selectOption('select[aria-label="Seleccionar tipo de ubicación"]', { label: 'Sucursal' });
    await page.click("//button[normalize-space()='Agregar Sistema']");
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: ERP Principal']", 'CRM Principal');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: SAP']", 'AWS');
    await limpiarYEscribirSiExiste(page, "//input[@placeholder='Ej: 2023.1']", '2005.1');
    await escribirFecha(page, "//tbody/tr/td[4]/input[1]", '01/01/2006');
    await page.click("//button[normalize-space()='Agregar Área Participante']");
    await limpiarYEscribirSiExiste(page, '#areaNombre', 'Recursos Humanos');
    await limpiarYEscribirSiExiste(page, '#areaModulos', 'Encargados de la contratación del personal');
    await limpiarYEscribirSiExiste(page, '#areaRoles', 'Gerente de RH, Gerente de Nómina, Gerente de Contratación');
    await page.selectOption('#areaCriticidad', { label: 'Baja' });
    await limpiarYEscribirSiExiste(page, '#areaProcesos', 'Procesamiento de contratación y de la nómina. Tomando en cuenta la productividad diaria');
    await page.click("//button[normalize-space()='Crear Área Participante']");
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await page.waitForTimeout(10000);
    await cerrarSesion(page);
    await ingresarAOrganizacion(page);
    await expect(page.locator('#sitioWeb')).toBeVisible();
  });

  test('AUT-011 / ORGANIZACIÓN / Validar eliminar información', async ({ page }) => {
    await ingresarAOrganizacion(page);
    // Limpiar solo los inputs que se llenaron en AUT-010 si existen
    await limpiarYEscribirSiExiste(page, '#sitioWeb', '');
    await limpiarYEscribirSiExiste(page, "#ubicacion", '');
    await limpiarYEscribirSiExiste(page, '#productosServicios', '');
    await limpiarYEscribirSiExiste(page, '#sistemasReemplazar', '');
    await limpiarYEscribirSiExiste(page, '#numeroEmpleados', '');
    await limpiarYEscribirSiExiste(page, '#numeroUsuarios', '');
    await limpiarYEscribirSiExiste(page, '#volumenTransacciones', '');
    await limpiarYEscribirSiExiste(page, '#organigrama', '');
    await limpiarYEscribirSiExiste(page, '#comitesJuntas', '');
    await limpiarYEscribirSiExiste(page, '#mapaProcesos', '');
    await limpiarYEscribirSiExiste(page, '#politicasSeguridad', '');
    await limpiarYEscribirSiExiste(page, '#areaNombre', '');
    await limpiarYEscribirSiExiste(page, '#areaModulos', '');
    await limpiarYEscribirSiExiste(page, '#areaRoles', '');
    await limpiarYEscribirSiExiste(page, '#areaProcesos', '');
    // Eliminar cada elemento según el flujo solicitado, solo si existen
    const eliminarYConfirmar = async (xpath: string) => {
      const icon = page.locator(xpath);
      if (await icon.count() > 0) {
        await icon.click();
        await page.click("//button[normalize-space()='Sí, eliminar']");
      }
    };
    await eliminarYConfirmar("//button[@aria-label='Eliminar certificación']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar horario']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar dato crítico']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar contacto IT']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar ubicación']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar sistema crítico']//i[@class='bi bi-trash']");
    await eliminarYConfirmar("//button[@aria-label='Eliminar área participante']//i[@class='bi bi-trash']");
    await page.click("//button[normalize-space()='Guardar Cambios']");
    await page.waitForTimeout(10000);
    await cerrarSesion(page);
    await ingresarAOrganizacion(page);
    await expect(page.locator('#sitioWeb')).toBeVisible();
  });
});
