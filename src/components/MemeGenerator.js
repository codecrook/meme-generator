import { useState, useEffect } from 'react'

export default function MemeGenerator() {
    const [allMemeImgs, setAllMemeImgs] = useState([]);
    const [text, setText] = useState({ topText: '', bottomText: '' });
    const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data;
                setAllMemeImgs(memes);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setText(prevText => ({ ...prevText, [name]: value }));
    }

    const getRandomImage = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length);
        const randMemeImg = allMemeImgs[randNum].url;
        setRandomImg(randMemeImg);
    }

    return (
        <div>
            <form className="meme-form" onSubmit={getRandomImage}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={text.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={text.bottomText}
                    onChange={handleChange}
                />

                <button>Gen</button>
            </form>

            <div className="meme">
                <img src={randomImg} alt="" />
                <h2 className="top">{text.topText}</h2>
                <h2 className="bottom">{text.bottomText}</h2>
            </div>
        </div>
    );
}
