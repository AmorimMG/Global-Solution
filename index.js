function handleSubmit(event) {
  event.preventDefault()
  const continentSelect = document.getElementById('continent-select')
  const selectedContinent = continentSelect.value

  showContinent(selectedContinent)
}

function showContinent(selectedContinent){
  const dadosContinentes = {
    /*África*/ 1: `
    <h3>África</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 23.4%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>23,4%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 34.5%">
          <div class="bar bg-light"></div>
        </div> 
        <span>34,5%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
    `,

    /*América Latina e Caribe*/ 2:`
    <h3>América Latina e Caribe</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 14.2%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>14,2%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 26.4%">
          <div class="bar bg-light"></div>
        </div> 
        <span>26,4%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
  `,

    /*Ásia*/ 3: `
    <h3>Ásia</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 10.5%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>10.5%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 14.1%">
          <div class="bar bg-light"></div>
        </div> 
        <span>14,1%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
    `,

    /*Oceania*/ 4: `
    <h3>Oceania</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 4.5%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>4,5%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 8.5%">
          <div class="bar bg-light"></div>
        </div> 
        <span>8,5%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
    `,

    /*América do Norte e Europa*/ 5: `
    <h3>América do Norte e Europa</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 1.5%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>1,5%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 6.5%">
          <div class="bar bg-light"></div>
        </div> 
        <span>6,5%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
  `,

    /*Mundo*/ 6: `
    <h3>Mundo</h3>
    <ul class="continent-data">
      <li>
        <div class="bar-container" style="--max-width: 9.8%">
          <div class="bar bg-pink"></div>
        </div> 
        <span>9,8%</span>
      </li>
      <li>
        <div class="bar-container" style="--max-width: 19.5%">
          <div class="bar bg-light"></div>
        </div> 
        <span>19,5%</span>
      </li>
      <small class="text-white-50">Fonte: ONU - O Estado de Segurança Alimentar e Nutrição no Mundo (2022) | Números referentes a 2021</small>
    </ul>
    <div class="legend">
      <div class="legend-item">
        <div class="square bg-light"></div> <span>Insegurança alimentar moderada</span>
      </div>
      <div class="legend-item">
        <div class="square bg-pink"></div> <span>Insegurança alimentar grave</span>
      </div>
    </div>
    `,
  }

  const continentDataContainer = document.getElementById('continent-data-container')
  continentDataContainer.innerHTML = dadosContinentes[selectedContinent]
}