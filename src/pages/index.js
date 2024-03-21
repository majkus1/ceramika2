import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const IndexPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const images = [
    "/icons/1-2.jpg",
    "/icons/2-2.jpg",
    "/icons/3-2.jpg",
    "/icons/4-2.jpg",
    "/icons/5-2.jpg",
    "/icons/6-2.jpg",
  ]
  const galleryRef = useRef(null)

  const goLeft = () => {
    setActiveIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    )
  }

  const goRight = () => {
    setActiveIndex(prevIndex =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    )
  }

  const handleImageClick = index => {
    setActiveIndex(index)
    if (index === activeIndex) {
      setIsModalOpen(true) // Otwórz modal, jeśli kliknięto na aktywny obraz
    }
  }

  useEffect(() => {
    // Przesunięcie, aby aktywne zdjęcie było na środku
    const galleryWidth = galleryRef.current.offsetWidth
    const itemWidth = galleryWidth / 3 // Ponieważ chcemy, aby 3 zdjęcia były widoczne
    const scrollTo = itemWidth * activeIndex - itemWidth // Przesuwamy, aby aktywne zdjęcie było na środku
    galleryRef.current.scrollLeft = scrollTo
  }, [activeIndex])

  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible")
          } else {
            entry.target.classList.remove("isVisible")
          }
        })
      },
      { threshold: 0.3 }
    )

    revealSections.forEach(section => {
      observer.observe(section)
    })

    return () =>
      revealSections.forEach(section => {
        observer.unobserve(section)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header onMenuToggle={isOpen => setIsMenuOpen(isOpen)} />
      {/* <h1>Witaj na mojej stronie Gatsby!</h1> */}
      <main className={isMenuOpen ? "blurred" : ""}>
        <picture>
          <source srcSet="/icons/mob-IMG_3224.jpg" media="(max-width: 599px)" />
          {/* <img src="/icons/IMG_3224.jpg" alt="Background" /> */}
          <div className="img-bgc"></div>
        </picture>
        <div class="overlay">
          {/* <h1>
          <span>Klinkier</span> <span>to</span> <span>nasza</span> <span>specjalność</span>
          </h1> */}
          <div className="text-effect6 effect">
            <div className="overlau"></div>
            <div>
              <p>
                Klinkier <span>to nasza</span> specjalność
              </p>
              <p>
                Witamy w Hurtowni <span>Materiałów Budowlanych</span>
              </p>
            </div>
          </div>
          <br></br>
          <div className="shopbtnmain">
            {/* <p>Witamy w Hurtowni Materiałów Budowlanych</p> */}
            <Link href="">
              <img src="/icons/arrow-right.png" />
              Sklep online
            </Link>
          </div>
        </div>
      </main>
      <section className={`${isMenuOpen ? "blurred" : ""}`} id="first-page">
        <div className="welcome-txt reveal">
          <h2>Hurtownia Materiałów Budowlanych powstała w roku 1992</h2>
          <p className="skills-quality">
            Doświadczenia zebrane podczas lat pracy pozwoliły nam na nabycie
            umiejętności w doborze odpowiednich materiałów. Również jakość
            dostepnych u nas materiałów została wielokrotnie sprawdzona przez
            nas samych i naszych klientów.{" "}
          </p>
          <p className="now">
            W chwili obecnej posiadamy w sprzedaży wyroby ceramiczne najlepszej
            jakości.{" "}
          </p>
          {/* <div className="btn-offer">
          <Link href="" className="check-offer">
            <img src="/icons/arrow-right.png" />
            Sprawdzam ofertę
          </Link>
        </div> */}
        </div>

        <div className="office-text reveal">
          <div className="btn-offer">
            <Link href="" className="check-offer">
              <img src="/icons/arrow-right.png" />
              Sprawdzam ofertę
            </Link>
          </div>
          <p className="come-to-us">
            W Ceramice znajdziesz wszystko co jest Ci niezbędne do wykonania
            dachu, elewacji i ogrodzenia z wyrobów ceramicznych{" "}
          </p>
          <p className="goodpq">
            Mamy to wszystko w konkurencyjnej cenie i najlepszej jakości{" "}
          </p>
          <p className="welcome">
            Zapraszamy na ulicę Baranowicką 144 w Białymstoku
          </p>
        </div>
      </section>
      <section className={`${isMenuOpen ? "blurred" : ""} reveal`} id="office">
      <div className="desktop-btn-offer">
          <Link href="" className="check-offer">
            <img src="/icons/arrow-right.png" />
            Sprawdzam ofertę
          </Link>
        </div>
        <div className="office-gallery-container">
          <div className="office-gallery" ref={galleryRef}>
            {images.map((src, index) => (
              <div
                key={src}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleImageClick(index)}
              >
                <img src={src} alt={`Obraz ${index + 1}`} />
              </div>
            ))}
            <button className="left-go" onClick={goLeft}>
              {"<"}
            </button>
            <button className="right-go" onClick={goRight}>
              {">"}
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img
              src={images[activeIndex]}
              alt={`Powiększenie ${activeIndex + 1}`}
            />
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <button className="modal-left" onClick={() => goLeft()}>
              {"<"}
            </button>
            <button className="modal-right" onClick={() => goRight()}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPage
