export  const SectionIntro = () => {
    return (
        <section id='intro' className="grid grid-cols-2 w-full bg-graphite1 pt-36" style={{overflow: 'hidden'}}>
            <div className="flex flex-row items-end justify-center">
                <img src='pies.webp' style={{height: '120%'}} />
            </div>
            <div className='flex flex-col items-center justify-center font-huj'>
                <h1 className='text-bone1 text-8xl mb-6'>Psia Fryzjernia</h1>
                <h2 className='text-bone1 text-3xl max-w-lg text-center mb-6'>"Prawdziwy przyjaciel pozostawi ślady łap na Twoim sercu"</h2>
                {/* <button className="bg-khakiLight text-3xl text-gray-800 pt-4 pb-4 pl-8 pr-8 rounded-md">ZADZWOŃ</button> */}
            </div>
        </section>
    )
}

