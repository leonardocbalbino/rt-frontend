"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[471],{471:(O,c,o)=>{o.r(c),o.d(c,{AlunosModule:()=>N});var a=o(6895),d=o(433),T=o(9364),v=o(1327),m=o(793),g=o(5593),b=o(5132),x=o(7919),p=o(5808),t=o(8256),A=o(6872),h=o(3608),y=o(805);function Z(e,l){1&e&&(t.TgZ(0,"tr")(1,"th",16),t._uU(2,"Nome"),t.qZA(),t.TgZ(3,"th",17),t._uU(4,"Plano"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Vencimento"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Valor Previsto"),t.qZA(),t.TgZ(9,"th",17),t._uU(10,"A\xe7\xe3o"),t.qZA()())}function C(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"td")(12,"button",18),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.goToEdit())}),t.qZA(),t.TgZ(13,"button",19),t.NdJ("click",function(){const s=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.goToView(s))}),t.qZA(),t.TgZ(14,"button",20),t.NdJ("click",function(){const s=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.goToPayment(s))}),t.qZA()()()}if(2&e){const n=l.$implicit;t.xp6(2),t.Oqu(n.nome),t.xp6(2),t.AsE("",null==n||null==n.planos[0]?null:n.planos[0].nome," (",t.xi3(5,5,null==n||null==n.planos[0]?null:n.planos[0].valor,"BRL"),")"),t.xp6(3),t.hij("Dia ",n.vencimento,""),t.xp6(2),t.Oqu(t.xi3(10,8,n.valor_previsto,"BRL"))}}const f=function(){return{width:"2.5rem",height:"2.5rem"}},_=function(){return{"min-width":"50rem"}},M=function(){return[10,25,50]};let S=(()=>{class e{constructor(n,i){this.alunoService=n,this.router=i,this.first=0,this.rows=10,this.customers=[]}ngOnInit(){this.alunos(),this.dashbord()}alunos(){this.alunoService.alunos().subscribe(n=>{this.listagemAlunos=n.alunos,console.log(this.listagemAlunos)})}dashbord(){this.alunoService.alunos().subscribe(n=>{this.totalAlunos=n.total_alunos.total_alunos,this.receita=n.valor_previsto.valor})}goToRegister(){this.router.navigate(["cadastro-aluno"])}goToEdit(){this.router.navigate(["edicao-aluno"])}goToView(n){this.router.navigate(["visualizacao-aluno"],{state:n})}goToPayment(n){this.router.navigate(["pagamento"],{state:n})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(A.j),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-alunos-list"]],decls:30,vars:17,consts:[[1,"grid"],[1,"col-12","lg:col-6","xl:col-6"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-user","text-blue-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-green-100","border-round",3,"ngStyle"],[1,"pi","pi-wallet","text-green-500","text-xl"],[1,"card"],[1,"field","col-12","flex","justify-content-end"],["pButton","","pRipple","","label","Adicionar Aluno","icon","pi pi-plus",2,"background-color","#6ccaed","color","white","border-color","#6ccaed",3,"click"],["currentPageReportTemplate","Exibindo {first} a {last} de {totalRecords} registros",3,"value","paginator","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],[2,"width","20%"],[2,"width","10%"],["pButton","","pRipple","","icon","pi pi-pencil","pTooltip","Editar",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","icon","pi pi-eye","pTooltip","Visualizar",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"],["pButton","","pRipple","","icon","pi pi-money-bill","pTooltip","Pagamentos",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"span",4),t._uU(6,"Quantidade de Alunos"),t.qZA(),t.TgZ(7,"div",5),t._uU(8),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"i",7),t.qZA()()()(),t.TgZ(11,"div",1)(12,"div",2)(13,"div",3)(14,"div")(15,"span",4),t._uU(16,"Valor Previsto (Mensalidades)"),t.qZA(),t.TgZ(17,"div",5),t._uU(18),t.ALo(19,"currency"),t.qZA()(),t.TgZ(20,"div",8),t._UZ(21,"i",9),t.qZA()()()()(),t.TgZ(22,"div",10)(23,"h5"),t._uU(24,"Lista de Alunos"),t.qZA(),t.TgZ(25,"div",11)(26,"button",12),t.NdJ("click",function(){return i.goToRegister()}),t.qZA()(),t.TgZ(27,"p-table",13),t.YNc(28,Z,11,0,"ng-template",14),t.YNc(29,C,15,11,"ng-template",15),t.qZA()()),2&n&&(t.xp6(8),t.hij(" ",i.totalAlunos," Alunos"),t.xp6(1),t.Q6J("ngStyle",t.DdM(13,f)),t.xp6(9),t.hij(" ",t.xi3(19,10,i.receita,"BRL"),""),t.xp6(2),t.Q6J("ngStyle",t.DdM(14,f)),t.xp6(7),t.Q6J("value",i.listagemAlunos)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("tableStyle",t.DdM(15,_))("rowsPerPageOptions",t.DdM(16,M)))},dependencies:[a.PC,h.u,m.iA,y.jx,g.Hq,a.H9]}),e})(),L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild([{path:"",component:S}]),p.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez]}),e})();var P=o(1740),B=o(5047),I=o(3054),w=o(5702),D=o(585),J=o(6679);let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.ez,d.u5,T.S,v.$9,m.U$,b.l,x.ml,g.hJ,E,L,P.j,B.L$,I.A,w.kW,D._8,d.UX,J.W]}),e})()}}]);