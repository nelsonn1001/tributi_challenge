

const JsonPageSchema=`
{
  "schemaName": "v1",
  "schemaTittle":"Bienvenido Ingresa tu información",
  "config": [
{
  "stepId": "1",
  "stepTittle":"Información Inicial",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t001",
  "componentParamName": "",
  "value":"Nombre",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu nombre",
  "componentId": "tf001",
  "componentParamName": "name",
  "value":"Nombre",
  "isRequired":true
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t002",
  "componentParamName": "",
  "value":"Apellido",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Apellido",
  "componentId": "tf002",
  "componentParamName": "lastName",
  "value":"Apellido",
  "isRequired":true
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
  "stepTittle":"Identificación",
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
  "value":"Documento",
   "isRequired":true
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 12,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Documento",
  "componentId": "tf003",
  "componentParamName": "document",
  "value":"Documento",
  "isRequired":true
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
  "stepTittle":"Información de Contacto",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t005",
  "componentParamName": "",
  "value":"Email",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "emailMatch",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Email",
  "componentId": "tf004",
  "componentParamName": "email",
  "value":"Email",
  "isRequired":true
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t006",
  "componentParamName": "",
  "value":"Teléfono",
   "isRequired":true
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 10,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Teléfono",
  "componentId": "tf005",
  "componentParamName": "phone",
  "value":"Teléfono",
  "isRequired":true
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
  "stepTittle":"Información Adicional",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"Dirección",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Dirección",
  "componentId": "tf006",
  "componentParamName": "address",
   "value":"Dirección",
   "isRequired":true
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
  "schemaTittle":"Bienvenido Ingresa tu información",
  "config": [
{
  "stepId": "1",
  "stepTittle":"Información Inicial",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t001",
  "componentParamName": "",
  "value":"Nombre",
   "isRequired":true
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu nombre",
  "componentId": "tf001",
  "componentParamName": "name",
  "value":"Nombre",
  "isRequired":true
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t002",
  "componentParamName": "",
  "value":"Apellido",
  "isRequired":false
},
{
  "type": "textField",
  "validate": "noNumbers",
  "maxLength": 20,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Apellido",
  "componentId": "tf002",
  "componentParamName": "lastName",
  "value":"Apellido",
  "isRequired":false
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
  "stepTittle":"Identificación",
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
  "value":"Documento",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 12,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Documento",
  "componentId": "tf003",
  "componentParamName": "document",
  "value":"Documento",
  "isRequired":true
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
  "stepTittle":"Información de Contacto",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t005",
  "componentParamName": "",
  "value":"Correo Electrónico",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "emailMatch",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Correo",
  "componentId": "tf004",
  "componentParamName": "email",
  "value":"Correo Electrónico",
  "isRequired":true
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t006",
  "componentParamName": "",
  "value":"Teléfono",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "onlyNumbers",
  "maxLength": 10,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Teléfono",
  "componentId": "tf005",
  "componentParamName": "phone",
  "value":"Teléfono",
  "isRequired":true
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
  "stepTittle":"Información Adicional",
  "fields": [
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"Dirección",
  "isRequired":true
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "Escribe tu Dirección",
  "componentId": "tf006",
  "componentParamName": "address",
  "value":"Dirección",
  "isRequired":true
},
  {
  "type": "text",
  "validate": "",
  "maxLength": 30,
  "baseColor": "#52da52ff",
  "placeHolder": "",
  "componentId": "t007",
  "componentParamName": "",
  "value":"Comentario",
  "isRequired":false
},
{
  "type": "textField",
  "validate": "",
  "maxLength": 40,
  "baseColor": "#edf8e0ff",
  "placeHolder": "comentario",
  "componentId": "tf008",
  "componentParamName": "comments",
  "value":"Comentario",
   "isRequired":false
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
    onlyNumbers=`\d`, 
    noNumbers= `^[^0-9]+$`, 
    emailMatch=`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`,
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

const MessageValidator='Llena el campo de ';
const MessageValidatorFormatOne='Formato no valido Ingresa solo Números';
const MessageValidatorFormatTwo='Formato no valido Ingresa solo letras';
const MessageValidatorFormatThree=' Ingresa un Email valido';

export {
DocTypes,
FormTypes,
ValidateExpression,
FormFields,
JsonPageSchema,
JsonPageSchemaV2,
EndStep,
MessageValidator,
MessageValidatorFormatOne,
MessageValidatorFormatTwo,
MessageValidatorFormatThree
}
