
(async () => {
    let preciobusqueda=window.localStorage.getItem("preciobusqueda");
    let resultado = document.querySelector(".pccardb");
    resultado.innerHTML += ` ` ;
    const jhttp = new XMLHttpRequest();
    jhttp.open('GET', "../js/depto.json", true);
    jhttp.send();
    const khttp = new XMLHttpRequest();
    khttp.open('GET', "../js/hotel.json", true);
    khttp.send();
    const lhttp = new XMLHttpRequest();
    lhttp.open('GET', "../js/casa.json", true);
    lhttp.send();
    
    
    jhttp.onreadystatechange = function () {
        
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            
            for (item in datos) {
                
                if (datos[item].precio <= preciobusqueda) {
                    
                    
                    resultado.innerHTML += ` 
                        <section class="productcard">
                            <div class="pcard1">
                                <a class="pc1a" href="depto1.html">
                                <img class="cardimage" src="${datos[item].imagen}" alt="">
                                </a>
                                <div class="pc1b">
                                    <div class="pc1">
                                        <h1 class="TD1">${datos[item].direccion}</h1>
                                        <p class="TPD">${datos[item].localidad}</p>
                                    </div>
                                    <div class="pc2">
                                        <p class="TPD">${datos[item].desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pcard2">
                                <div class="pc2a">
                                    <h1 class="TD2">${datos[item].titulo}</h1>
                                    <p class="TPD">${datos[item].minidesc}</p>
                                </div>
                                <div class="pc2b">
                                    <a class="pc2icon" href="#"></a>
                                </div>
                                <div class="pc2c">
                                    <h1 class="TD3">ALQUILER USD ${datos[item].precio}</h1>
                                </div>
                            </div>
                        </section>
                    `;
                }
            }
        }

    }
    khttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            
            for (item in datos) {
                if (datos[item].precio <= preciobusqueda) {
                    resultado.innerHTML += ` 
                        <section class="productcard">
                            <div class="pcard1">
                                <a class="pc1a" href="depto1.html">
                                <img class="cardimage" src="${datos[item].imagen}" alt="">
                                </a>
                                <div class="pc1b">
                                    <div class="pc1">
                                        <h1 class="TD1">${datos[item].direccion}</h1>
                                        <p class="TPD">${datos[item].localidad}</p>
                                    </div>
                                    <div class="pc2">
                                        <p class="TPD">${datos[item].desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pcard2">
                                <div class="pc2a">
                                    <h1 class="TD2">${datos[item].titulo}</h1>
                                    <p class="TPD">${datos[item].minidesc}</p>
                                </div>
                                <div class="pc2b">
                                    <a class="pc2icon" href="#"></a>
                                </div>
                                <div class="pc2c">
                                    <h1 class="TD3">USD p/dia ${datos[item].precio}</h1>
                                </div>
                            </div>
                        </section>
                    `;
                }
            }
        }

    }
    lhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            datos = JSON.parse(this.responseText);
            for (item in datos) {
                if (datos[item].precio <= preciobusqueda) {
                    resultado.innerHTML += ` 
                        <section class="productcard">
                            <div class="pcard1">
                                <a class="pc1a" href="depto1.html">
                                <img class="cardimage" src="${datos[item].imagen}" alt="">
                                </a>
                                <div class="pc1b">
                                    <div class="pc1">
                                        <h1 class="TD1">${datos[item].direccion}</h1>
                                        <p class="TPD">${datos[item].localidad}</p>
                                    </div>
                                    <div class="pc2">
                                        <p class="TPD">${datos[item].desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="pcard2">
                                <div class="pc2a">
                                    <h1 class="TD2">${datos[item].titulo}</h1>
                                    <p class="TPD">${datos[item].minidesc}</p>
                                </div>
                                <div class="pc2b">
                                    <a class="pc2icon" href="#"></a>
                                </div>
                                <div class="pc2c">
                                    <h1 class="TD3">USD ${datos[item].precio}</h1>
                                </div>
                            </div>
                        </section>
                    `;
                }
            }
        }

    }
})()
function cambiourl(a){
    window.localStorage.setItem("preciobusqueda",a);
    window.location.replace('../templates/busqueda.html');
    
    
}

