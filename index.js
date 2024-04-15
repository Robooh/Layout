async function trocarConselho(){
    const result = await fetch('https://api.adviceslip.com/advice')
    const data = await result.json()
    const adviceText = `"${data.slip.advice}"`;

        document.getElementById('conselho').innerHTML = adviceText;
    }

    document.getElementById('btn').addEventListener('click', trocarConselho)

    
    
    


    
    






    





