# Amor Vitae · cotización de traslado

Página de Amor Vitae con el formulario de cotización (origen, destino, qué se traslada, frecuencia) y el botón para solicitar traslados por el chatbot de WhatsApp de la Plataforma STEMP.

## Configuración
`assets/config.js`: canales de cotización (en la fase 1, los de STEMP), chatbot de solicitudes, respaldo del grupo y ciudades.

## Pendientes
- Canales propios de Amor Vitae: por definir (hoy, los de STEMP).
- Sin ® en el logo: no hay certificado de registro de la marca.

## Fotos
De Pexels (licencia de Pexels: uso comercial gratis, sin atribución obligatoria), optimizadas en `assets/img/`. Número de cada foto en pexels.com: mensajero-moto (13311393), tubos-gradilla (11181872), tubos-tapa-azul (3908182), mensajero-paquete (6867969). Sin logos de fabricantes ni datos de pacientes.

## Reglas de escisión
1. Sitio, repositorio y dominio propios; sin código compartido con los otros sitios (si se parecen, es por copia).
2. Canales propios para pedidos y cotizaciones, en la configuración del sitio.
3. Política de tratamiento de datos y casilla de autorización propias (Ley 1581 de 2012). Hoy el responsable es STEMP.
4. Pagos y factura electrónica (fase 2) a nombre de quien vende.
5. Marca propia; «Parte de Team 3» es un respaldo que se quita dejando vacío un dato de la configuración.
6. Plataformas compartidas (Plataforma STEMP, Resultados Lab), enlazadas desde la configuración.

## Cómo se publica
Sitio estático (HTML, CSS y JavaScript, sin compilar ni servidor). GitHub Pages publica la rama `main`. El sitio no guarda datos: cada formulario arma un mensaje que el cliente revisa y envía por WhatsApp o por correo.

Prototipo de la fase 1 (octubre de 2026), proyecto T3. Plan en el vault: «Sitio web STEMP».
