export class AppRepository { 
    public static personas = [{
        id: 1,
        primerNombre: "Andrés",
        documento: "123"
    },
    {
        id: 2,
        primerNombre: "Camilo",
        documento: "456"
    },
    {
        id: 3,
        primerNombre: "Felipe",
        documento: "789"
    },
    {
        id: 4,
        primerNombre: "David",
        documento: "012"
    },
]
    public static obtenerPersonas(){
        return this.personas;
    }
 }