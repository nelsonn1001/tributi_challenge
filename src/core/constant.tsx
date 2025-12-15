

const JsonPageSchema=`
{
  "schemaName": "v1",
  "config": [
{
  "stepId": "1",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t001",
  "componentParamName": "",
  "value":"Nombre"
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu nombre",
  "componentId": "tf001",
  "componentParamName": "name",
  "value":""
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t002",
  "componentParamName": "",
  "value":"Apellido"
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Apellido",
  "componentId": "tf002",
  "componentParamName": "lastName",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn001",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#f0f5f7ff"
},
{
  "stepId": "2",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t003",
  "componentParamName": "",
  "value":"Tipo de Documento"
},
{
  "type": "select",
  "validate": "",
  "maxLength": 5,
  "baseColor": "#edf8e0ff",
  "placeHolder": "",
  "componentId": "st001",
  "componentParamName": "documentType",
  "value":"CC"
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t004",
  "componentParamName": "",
  "value":"Documento"
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 12,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Documento",
  "componentId": "tf003",
  "componentParamName": "document",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn002",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#e6f1f5ff"
}
,
{
  "stepId": "3",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t005",
  "componentParamName": "",
  "value":"Email"
},
{
  "type": "textField",
  "validate": "emailMatch",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Correo",
  "componentId": "tf004",
  "componentParamName": "email",
  "value":""
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t006",
  "componentParamName": "",
  "value":"Teléfono"
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 10,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Teléfono",
  "componentId": "tf005",
  "componentParamName": "phone",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn003",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#dbf2faff"
}
,
{
  "stepId": "4",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"Dirección"
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Dirección",
  "componentId": "tf006",
  "componentParamName": "address",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn004",
  "componentParamName": "",
  "value":"Finalizar"
}

],
  "stepColor": "#dbf2faff"
}

]
}
`;

const JsonPageSchemaV2=`
{
  "schemaName": "v1",
  "config": [
{
  "stepId": "1",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t001",
  "componentParamName": "",
  "value":"Nombre"
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu nombre",
  "componentId": "tf001",
  "componentParamName": "name",
  "value":""
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t002",
  "componentParamName": "",
  "value":"Apellido"
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Apellido",
  "componentId": "tf002",
  "componentParamName": "lastName",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn001",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#f0f5f7ff"
},
{
  "stepId": "2",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t003",
  "componentParamName": "",
  "value":"Tipo de Documento"
},
{
  "type": "select",
  "validate": "",
  "maxLength": 5,
  "baseColor": "#edf8e0ff",
  "placeHolder": "",
  "componentId": "st001",
  "componentParamName": "documentType",
  "value":"CC"
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t004",
  "componentParamName": "",
  "value":"Documento"
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 12,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Documento",
  "componentId": "tf003",
  "componentParamName": "document",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn002",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#e6f1f5ff"
}
,
{
  "stepId": "3",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t005",
  "componentParamName": "",
  "value":"Email"
},
{
  "type": "textField",
  "validate": "emailMatch",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Correo",
  "componentId": "tf004",
  "componentParamName": "email",
  "value":""
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t006",
  "componentParamName": "",
  "value":"Teléfono"
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 10,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Teléfono",
  "componentId": "tf005",
  "componentParamName": "phone",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn003",
  "componentParamName": "",
  "value":"Siguiente"
}

],
  "stepColor": "#dbf2faff"
}
,
{
  "stepId": "4",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"comentario"
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Dirección",
  "componentId": "tf006",
  "componentParamName": "address",
  "value":""
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"Dirección"
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "comentario",
  "componentId": "tf008",
  "componentParamName": "comments",
  "value":""
},
{
  "type": "button",
  "validate": "",
  "maxLength": 0,
  "baseColor": "#03c513ff",
  "placeHolder": "",
  "componentId": "btn004",
  "componentParamName": "",
  "value":"Finalizar"
}

],
  "stepColor": "#dbf2faff"
}

]
}
`;

const EndStep='End';

enum DocTypes{
    CC='CC',
    CE='CE',
    TI='TI',
};


enum FormTypes{
    button='button',
    textField='textField',
    text='text',
    select='select',
}


enum ValidateExpression{
    onlyNumbers=`/\d/`, 
    noNumbers= `/^[^0-9]+$/`, 
    emailMatch=`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`,
}


enum FormFields{
    name='name',
    lastName='lastName',
    email='email',
    phone='phone',
    document='document',
    documentType='documentType',
    address='address',
    comment='comment',

}

export {
DocTypes,
FormTypes,
ValidateExpression,
JsonPageSchema,
JsonPageSchemaV2,
EndStep,
FormFields  
}
