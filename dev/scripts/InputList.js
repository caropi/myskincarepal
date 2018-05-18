import React from "react";

//Array of inputs 

const inputStep = [
    {
        id: 'oilCleanser',
        name: 'Oil Cleanser',
        value: 1,
        img: 'assets/oil-cleanser.svg',
        alt: 'Icon of oil cleanser'
    },
    {
        id: 'secondCleanser',
        name: 'Second Cleanser',
        value: 2,
        img: 'assets/foaming-cleanser.svg',
        alt: 'Icon of a second cleanser tube'
    },
    {
        id: 'toner',
        name:'Toner',
        value: 3,
        img: 'assets/toner.svg',
        alt: 'Icon of a toner bottle'
    },
    {
        id: 'lotion',
        name: 'Lotion',
        value : 4,
        img : 'assets/lotion.svg',
        alt : 'Icon of a lotion bottle'
    },
    {
        id: 'actives',
        name: 'Actives',
        value: 5,
        img: 'assets/actives.svg',
        alt: 'Icon of an actives bottle'
    },
    {
        id: 'prescriptions',
        name: 'Prescriptions',
        value: 6,
        img: 'assets/prescriptions.svg',
        alt: 'Icon of a prescription tube'
    },
    {
        id: 'essenceSerumAmpoule',
        name:'Essence/Serum/Ampoule',
        value: 7,
        img: 'assets/essence-serum-ampoule.svg',
        alt: 'Icon of a essence bottle'
    },
    {
        id: 'oil',
        name: 'Oil',
        value: 8,
        img: 'assets/oil.svg',
        alt: 'Icon of an oil dropper'
    },
    {
        id: 'cream',
        name: 'Cream',
        value: 9,
        img: 'assets/cream.svg',
        alt: 'Icon of a cream jar'
    },
    {
        id: 'eyeCream',
        name: 'Eye Cream',
        value: 10,
        img: 'assets/eye-cream.svg',
        alt: 'Icon of a eye-cream jar'
    },
    {
        id: 'sleepingPack',
        name: 'Sleeping Pack',
        value: 11,
        img: 'assets/sleeping-pack.svg',
        alt: 'Icon of a sleeping pack jar'
    },  
    {
        id: 'mask',
        name: 'Mask',
        value: 12,
        img: 'assets/mask.svg',
        alt: 'Icon of a sleep mask'
    }, 
    {
        id: 'sunBlock',
        name: 'Sun Block',
        value: 13,
        img: 'assets/sun-block.svg',
        alt: 'Icon of a sun block tube'
    }

];

const InputList = (props) => {
    return inputStep.map((step) => {
        return (
            <div className="inputContainer" key={props.step}>
                <input type="checkbox" id={step.id} value={step.value} />
                <label htmlFor={step.id}>
                    <img src={step.img} alt={step.alt}/>
                    {step.name}
                </label>
            </div>
        )
    }) 
};
export default InputList;