import photo from "../pictures/photo-central.webp";

export default function Main() {
    return (
        <section className="main">
            <section className="main_central">
                <section className="main_central_h1"></section>
                <section className="main_central_composition">
                    <div className="main_central_composition_circle-color"></div>
                    <div className="main_central_composition_filter"></div>
                    <div className="main_central_composition_circle-1"></div>
                    <div className="main_central_composition_circle-2"></div>
                    <div className="main_central_composition_circle-3"></div>
                    <div className="main_central_composition_circle-2 circle-clone-rotate"></div>
                    <img src={photo} alt="photo-central"></img>
                </section>
            </section>
        </section>
    );
}
