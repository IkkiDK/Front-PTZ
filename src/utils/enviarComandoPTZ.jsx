export async function enviarComandoPTZ({
  camera,
  operacao,
  velocidade = 100,
  usuario,
  senha,
}) {
  const params = new URLSearchParams({
    Camera: camera,
    Operation: operacao,
    Speed: velocidade.toString(),
    ResponseFormat: "Text",
    AuthUser: usuario,
    AuthPass: senha,
  });

  const url = `http://192.168.0.1:8601/Interface/Cameras/PTZ/Simple?${params.toString()}`;

  try {
    const res = await fetch(url);
    const text = await res.text();

    if (!res.ok) throw new Error(text);
    console.log("Comando PTZ enviado:", text);
  } catch (err) {
    console.error("Erro ao enviar comando PTZ:", err.message);
  }
}
