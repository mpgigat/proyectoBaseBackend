(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e53c1"],{"942b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-start":""}},[a("v-flex",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Clientes")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-text-field",{staticClass:"text-xs-center",attrs:{"append-icon":"search",label:"Búsqueda","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},o),[t._v("Nuevo")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-select",{attrs:{items:t.documentos,label:"Tipo Documento"},model:{value:t.tipodocumento,callback:function(e){t.tipodocumento=e},expression:"tipodocumento"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Número Documento"},model:{value:t.numdocumento,callback:function(e){t.numdocumento=e},expression:"numdocumento"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Dirección"},model:{value:t.direccion,callback:function(e){t.direccion=e},expression:"direccion"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Teléfono"},model:{value:t.telefono,callback:function(e){t.telefono=e},expression:"telefono"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.valida,expression:"valida"}],attrs:{xs12:"",sm12:"",md12:""}},t._l(t.validaMensaje,(function(e){return a("div",{key:e,staticClass:"red--text",domProps:{textContent:t._s(e)}})})),0)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.guardar}},[t._v("Guardar")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.adModal,callback:function(e){t.adModal=e},expression:"adModal"}},[a("v-card",[1==t.adAccion?a("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.adAccion?a("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),a("v-card-text",[t._v(" Estás a punto de "),1==t.adAccion?a("span",[t._v("activar ")]):t._e(),2==t.adAccion?a("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.adNombre)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.adAccion?a("v-btn",{attrs:{color:"orange darken-4",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.adAccion?a("v-btn",{attrs:{color:"orange darken-4",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.personas,search:t.search},scopedSlots:t._u([{key:"item.opciones",fn:function(e){var o=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(o)}}},[t._v(" mdi-pencil ")]),o.estado?[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,o)}}},[t._v(" block ")])]:[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,o)}}},[t._v(" check ")])]]}},{key:"item.estado",fn:function(e){var o=e.item;return[o.estado?a("div",[a("span",{staticClass:"blue--text"},[t._v("Activo")])]):a("div",[a("span",{staticClass:"red--text"},[t._v("Inactivo")])])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.listar()}}},[t._v("Resetear")])]},proxy:!0}],null,!0)})],1)],1)},i=[],n=a("bc3a"),s=a.n(n),r={data:function(){return{dialog:!1,search:"",personas:[],headers:[{text:"Opciones",value:"opciones",sortable:!1},{text:"Nombre",value:"nombre",sortable:!0},{text:"Tipo Persona",value:"tipopersona",sortable:!0},{text:"Tipo Documento",value:"tipodocumento",sortable:!0},{text:"Número Documento",value:"numdocumento",sortable:!1},{text:"Dirección",value:"direccion",sortable:!1},{text:"Teléfono",value:"telefono",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Estado",value:"estado",sortable:!1}],editedIndex:-1,_id:"",nombre:"",tipopersona:"Cliente",tipodocumento:"",documentos:["CC","NIT","PASAPORTE","CE"],numdocumento:"",direccion:"",telefono:"",email:"",valida:0,validaMensaje:[],adModal:0,adAccion:0,adNombre:"",adId:""}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo registro":"Editar registro"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.listar()},methods:{listar:function(){var t=this,e={headers:{"x-token":this.$store.state.token}};s.a.get("persona/clientes",e).then((function(e){t.personas=e.data.persona})).catch((function(t){console.log(t)}))},limpiar:function(){this._id="",this.nombre="",this.numdocumento="",this.direccion="",this.telefono="",this.email="",this.valida=0,this.validaMensaje=[],this.editedIndex=-1},validar:function(){return this.valida=0,this.validaMensaje=[],(this.nombre.length<1||this.nombre.length>50)&&this.validaMensaje.push("El nombre de la persona debe tener entre 1-50 caracteres."),this.numdocumento.length>20&&this.validaMensaje.push("El documento no debe tener mÃ¡s de 20 caracteres."),this.direccion.length>70&&this.validaMensaje.push("La direcciÃ³n no debe tener mÃ¡s de 70 caracteres."),this.telefono.length>20&&this.validaMensaje.push("El telÃ©fono no debe tener mÃ¡s de 20 caracteres."),this.nombre.length>50&&this.validaMensaje.push("El email del usuario debe tener menos de 50 caracteres."),this.validaMensaje.length&&(this.valida=1),this.valida},guardar:function(){var t=this,e={headers:{"x-token":this.$store.state.token}};this.validar()||(this.editedIndex>-1?s.a.put("persona/".concat(t._id),{_id:this._id,tipopersona:this.tipopersona,nombre:this.nombre,tipodocumento:this.tipodocumento,numdocumento:this.numdocumento,direccion:this.direccion,telefono:this.telefono,email:this.email},e).then((function(e){t.limpiar(),t.close(),t.listar()})).catch((function(t){console.log(t)})):s.a.post("persona",{tipopersona:this.tipopersona,nombre:this.nombre,tipodocumento:this.tipodocumento,numdocumento:this.numdocumento,direccion:this.direccion,telefono:this.telefono,email:this.email},e).then((function(e){t.limpiar(),t.close(),t.listar()})).catch((function(t){console.log(t)})))},editItem:function(t){this._id=t._id,this.rol=t.rol,this.nombre=t.nombre,this.tipodocumento=t.tipodocumento,this.numdocumento=t.numdocumento,this.direccion=t.direccion,this.telefono=t.telefono,this.email=t.email,this.password=t.password,this.dialog=!0,this.editedIndex=1},activarDesactivarMostrar:function(t,e){this.adModal=1,this.adNombre=e.nombre,this.adId=e._id,1==t?this.adAccion=1:2==t?this.adAccion=2:this.adModal=0},activarDesactivarCerrar:function(){this.adModal=0},activar:function(){var t=this,e={headers:{"x-token":this.$store.state.token}};s.a.put("persona/activate/".concat(this.adId),{},e).then((function(e){t.adModal=0,t.adAccion=0,t.adNombre="",t.adId="",t.listar()})).catch((function(t){console.log(t)}))},desactivar:function(){var t=this,e={headers:{"x-token":this.$store.state.token}};s.a.put("persona/deactivate/".concat(this.adId),{},e).then((function(e){t.adModal=0,t.adAccion=0,t.adNombre="",t.adId="",t.listar()})).catch((function(t){console.log(t)}))},close:function(){this.dialog=!1}}},c=r,l=a("2877"),d=a("6544"),u=a.n(d),v=a("8336"),m=a("b0af"),h=a("99d9"),f=a("a523"),p=a("8fea"),b=a("169a"),x=a("ce7e"),_=a("0e8f"),k=a("132d"),g=a("a722"),C=a("b974"),M=a("2fa4"),I=a("8654"),A=a("71d9"),V=a("2a7f"),w=Object(l["a"])(c,o,i,!1,null,null,null);e["default"]=w.exports;u()(w,{VBtn:v["a"],VCard:m["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:f["a"],VDataTable:p["a"],VDialog:b["a"],VDivider:x["a"],VFlex:_["a"],VIcon:k["a"],VLayout:g["a"],VSelect:C["a"],VSpacer:M["a"],VTextField:I["a"],VToolbar:A["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-2d0e53c1.79bc5361.js.map