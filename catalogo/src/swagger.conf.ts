//Importar la bibilioteca de trabajo
import swaggerJSDoc from 'swagger-jsdoc'

export const swaggerOptions = {
	'definition':{
		openapi:'3.0.0',
		info:{
			title:'Catalogo',
			version:'1.0.0',
			description:''
		},
		servers:[
			{
				url:'http://localhost:3001',
				description:'Servidor local para el microservicio de Catalogo'
			}
		]
	},

	apis:['src/index.ts', './swagger/*.swagger.yaml']
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions)

