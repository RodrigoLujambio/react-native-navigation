//Para poder hacer peticiones a un servidor corriendo en nuestra maquina local desde un dispositivo
//podemos hacer lo siguiente:
//1. Instalar la herramienta localtunnel, ejecutando npm i -g localtunnel
//2. Con un db.json, navegar al directorio donde este dicho archivo,
// y ejecutar json-server --port 8000 ./db.json --watch
//3. En otra terminal, ejecutar lt --port 8000 --subdomain <nombre-deseado>, ej.:
//lt --port 8000 --subdomain my-server
//Con esto, desde nuestra app de React Native, vamos a poder hacer peticiones a nuestro servidor,
//haciendo https://<nombre-deseado>.loca.lt/{recurso}
//IMPORTANTE: En nuestras peticiones, debemos poner como uno de los headers, el siguiente valor:
//"bypass-tunnel-reminder": true. Sino, las peticiones no llegaran.

export const getInfo = async () => {
  const URL = "https://my-server.loca.lt/animals";
  try {
    const response = await fetch(URL, {
      headers: {
        "bypass-tunnel-reminder": true,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Error getting info");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getInfoById = async (id: string) => {
  const URL = `https://my-server.loca.lt/animals/${id}`;
  try {
    const response = await fetch(URL, {
      headers: {
        "bypass-tunnel-reminder": true,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Error getting info");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};
