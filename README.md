# Practica de Rutas con React Router Dom6.

1. **Importar** Routes, Route, Navigate de react-router-dom
2. Las carpetas assets, auth, journal tiene sus propias 
 **carpetas routes**. Y ahi se configura las rutas de la carpeta
 y que FC enrutarán.

3. La Prop **path**='xxx'. Nombra la ruta a tomar. dominio.com/**xxx**
4. la Prop **element**={<FC/>}. Indica el FC que se enruta.
 el path lo nombra.

5. La Prop **path='/*'** con '/*'. Indica que todas las rutas y paths. 
6. La Prop element={<**Navigate** to = {"auth/login"} />} />.
 **No** abre un FC. **Navega** al path. dominio.com/**auth/login** .
7. <Route path='/*' element= {<Navigate to = {"auth/login"} />} />.
 Esta indica que cualquier path te mandara a la ruta del path auth/login.

8. En FC App se importa el <AppRouter /> de la carpeta **router** del **root**. 
9. **Se envuelve** En el **FC padre** a enrutar dentro de un
 <BrowserRouter> </BrowserRouter>. 
 En este caso se envolvio al FC App en el main.

10. En la carpeta **router** en **root**. Se configuran las rutas hacia el **FC Routes de cada carpeta**.
    - <Route path='/auth/*' element={ <AuthRoutes/> } />
    - <Route path='/*' element={ <JournalRoutes/> } />

