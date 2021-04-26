var v1=document.getElementById("inputOption")
var v2=document.getElementById("inserttext")
function loadDoc(){
    var text = v1.options[v1.selectedIndex].text
    if(text=="Choose a Renewable Energy Source"){
        alert("Please choose a renewable energy source")
    }
    if(text=="Solar Energy"){
        v2.innerText="Solar energy is the transformation of heat, the energy that comes from the sun. It has been used for thousands of years in many different ways by people all over the world. The oldest uses of solar energy is for heating, cooking, and drying.It is an important renewable energy source because it can converted to many other forms of energy.Solar energy is radiant light and heat from the Sun that is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, solar thermal energy, solar architecture, molten salt power plants and artificial photosynthesis."
    }
    if (text=="Hydroelectric Energy"){
        v2.innerText="Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity.Because hydropower plants can generate power to the grid immediately, they provide essential back-up power during major electricity outages or disruptions. In addition to a sustainable fuel source, hydropower efforts produce a number of benefits, such as flood control, irrigation, and water supply."
    }
    if(text=="Nuclear Energy"){
        v2.innerText="Nuclear energy is the energy in the nucleus, or core, of an atom. Atoms are tiny units that make up all matter in the universe, and energy is what holds the nucleus together. There is a huge amount of energy in an atom's dense nucleus.Nuclear energy originates from the splitting of uranium atoms – a process called fission. This generates heat to produce steam, which is used by a turbine generator to generate electricity. Because nuclear power plants do not burn fuel, they do not produce greenhouse gas emissions."
    }
    if (text=="Bio Energy"){
        v2.innerText="Bioenergy refers to electricity and gas that is generated from organic matter, known as biomass. This can be anything from plants and timber to agricultural and food waste – and even sewage. The term bioenergy also covers transport fuels produced from organic matter.Bioenergy is energy made from biomass or biofuel. Biomass is any organic material which has absorbed sunlight and stored it in the form of chemical energy. Examples are wood, energy crops and waste from forests, yards, or farms. "
    }
    if (text=="Geothermal Energy"){
        v2.innerText="Geothermal energy is heat within the earth. The word geothermal comes from the Greek words geo (earth) and therme (heat). Geothermal energy is a renewable energy source because heat is continuously produced inside the earth. People use geothermal heat for bathing, to heat buildings, and to generate electricity.Geothermal energy is the thermal energy generated and stored in the Earth. Thermal energy is the energy that determines the temperature of matter. The geothermal energy of the Earth's crust originates from the original formation of the planet and from radioactive decay of materials."
    }
    if(text=="Wind Energy"){
        v2.innerText="Wind energy is a form of solar energy. Wind energy (or wind power) describes the process by which wind is used to generate electricity. Wind turbines convert the kinetic energy in the wind into mechanical power. A generator can convert mechanical power into electricity.Wind power or wind energy is the use of wind to provide mechanical power through wind turbines to turn electric generators for electrical power. Wind power is a popular sustainable, renewable source of power that has a much smaller impact on the environment compared to burning fossil fuels."
    }
    if(text=="Tidal Energy"){
        v2.innerText="Tidal energy is a renewable energy powered by the natural rise and fall of ocean tides and currents. Some of these technologies include turbines and paddles.Tidal power or tidal energy is harnessed by converting energy from tides into useful forms of power, mainly electricity using various methods. Although not yet widely used, tidal energy has the potential for future electricity generation. Tides are more predictable than the wind and the sun."
    }
}

