let handler = async m => m.reply(`
Política de privacidad de WhatsApp
___________________
Este servicio llamado insanebot cumple con
las politicas establecidas de whatsapp
y las seguientes dichas:

En nuestra Política de privacidad 
("Política de privacidad"), 
explicamos las prácticas que 
llevamos a cabo con la información
que tratamos para proporcionar 
nuestros Servicios.

El "bot" por asi decirlo, 
es una decision de cada uno 
agregarlo a un grupo o eliminarlo
de cualquier grupo debemos
cumplir con lo establecido 
para que este
mismo este funcionando.

Si alguien presenta un reclamo contra nosotros relacionado con sus acciones, 
contenido o información sobre InsaneBot, usted nos indemnizará y nos eximirá 
de todos los daños, pérdidas y gastos de cualquier tipo (incluidos los honorarios 
y costos legales razonables) relacionados con dicho reclamo. . 
Aunque proporcionamos reglas para la conducta del usuario, no controlamos 
ni dirigimos las acciones de los usuarios en InsaneBot y no somos responsables
 del contenido o la información que los usuarios transmiten o comparten en InsaneBot.
 No somos responsables de ningún contenido o información ofensiva, inapropiada,
 obscena, ilegal u objetable que pueda encontrar en InsaneBot. No somos responsables
 de la conducta, ya sea en línea o fuera de línea, de cualquier usuario de InsaneBot.

TRATAMOS DE MANTENER InsaneBot EN FUNCIONAMIENTO, LIBRE DE ERRORES Y SEGURO, 
PERO USTED LO UTILIZA BAJO SU PROPIO RIESGO. PROPORCIONAMOS InsaneBot 
TAL CUAL SIN NINGUNA GARANTÍA EXPRESA O IMPLÍCITA, INCLUYENDO, PERO NO LIMITADO A,
 GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD, APTITUD PARA UN PROPÓSITO EN PARTICULAR
 Y NO INFRACCIÓN. NO GARANTIZAMOS QUE InsaneBot SIEMPRE SERÁ SEGURO, 
SEGURO O LIBRE DE ERRORES O QUE InsaneBot SIEMPRE FUNCIONARÁ SIN INTERRUPCIONES,
 RETRASOS O IMPERFECCIONES. InsaneBot NO ES RESPONSABLE DE LAS ACCIONES, CONTENIDO,
 INFORMACIÓN O DATOS DE TERCEROS, Y USTED NOS LIBERA A NOSOTROS, NUESTROS DIRECTORES,
 FUNCIONARIOS, EMPLEADOS Y AGENTES DE CUALQUIER RECLAMACIÓN Y DAÑO, CONOCIDO O DESCONOCIDO
, QUE SURJA DE CUALQUIER FORMA CONECTADA CON CUALQUIER RECLAMO QUE TIENE CONTRA DICHOS TERCEROS.
 NO SEREMOS RESPONSABLES ANTE USTED POR LA PÉRDIDA DE GANANCIAS U OTRAS CONSECUENCIAS,
 ESPECIALES, INDIRECTAS, O DAÑOS INCIDENTALES QUE SURJAN O EN RELACIÓN
 CON ESTA DECLARACIÓN O InsaneBot, INCLUSO SI HEMOS SIDO ADVERTIDOS DE LA POSIBILIDAD DE
 DICHOS DAÑOS. LA LEY APLICABLE PUEDE NO PERMITIR LA LIMITACIÓN O EXCLUSIÓN
 DE RESPONSABILIDAD O DAÑOS INCIDENTALES O CONSECUENTES,
 POR LO QUE LA LIMITACIÓN O EXCLUSIÓN ANTERIOR PUEDE NO APLICARSE EN SU CASO.
 EN TALES CASOS, LA RESPONSABILIDAD DE InsaneBot 
SE LIMITARÁ A LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE.
　
-. Otro
-.1. Esta Declaración es un acuerdo entre usted y InsaneBot, Inc. Las referencias a 
"nosotros", "nosotros" y "nuestro" significan InsaneBot, Inc.
-.2. Esta Declaración constituye el acuerdo completo entre las partes con respecto a 
InsaneBot y reemplaza cualquier acuerdo anterior.
-.3. Si se determina que alguna parte de esta Declaración no se puede hacer cumplir, 
la parte restante permanecerá en pleno vigor y efecto.
-.4. Si no hacemos cumplir alguna de esta Declaración, no se considerará una renuncia.
Cualquier enmienda o renuncia a esta Declaración debe hacerse por escrito y estar 
firmada por nosotros.
-.5. No transferirá ninguno de sus derechos u obligaciones en virtud de esta 
Declaración a nadie más sin nuestro consentimiento.
-.-. Todos nuestros derechos y obligaciones en virtud de esta Declaración son 
asignables libremente por nosotros en relación con una fusión, 
adquisición o venta de activos, o por aplicación de la ley o de otro modo.
-.7. Nada en esta Declaración nos impedirá cumplir con la ley.
-.8. Esta Declaración no confiere derechos de beneficiarios a terceros.
-.9. Nos reservamos todos los derechos que no se le otorguen expresamente.
-.10. Cumplirá con todas las leyes aplicables al usar o acceder a InsaneBot.

Servicio de terceros
Nuestros Servicios pueden permitirte 
acceder a contenido u otros 
productos y servicios
de terceros con tal de
promover la satisfaccion personal
ya que nos mantenemos firmes
sobre nuestra responsabilidad
y hacemos de que pueda ser
usado para su uso correcto del mismo.

Puedes tener mas información 
sobre las politicas de privacidad
y condiciones de uso en
https://www.whatsapp.com/legal/updates/terms-of-service
http://blog.simsimi.com/2017/04/simsimi-terms-and-conditions.html
https://www.youtube.com/intl/es-419/about/policies/#community-guidelines

este servicio es gratis y sin publicidad.
Gracias por leerme
www.insanebot.com.ar
                                        
`.trim()) 
handler.help = ['politica']
handler.tags = ['info']
handler.command = /^(politica|política)$/i

module.exports = handler
