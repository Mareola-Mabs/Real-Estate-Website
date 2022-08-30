/*Using Pure Javascript to Make The Intersection Observer*/
const slider = document.querySelectorAll('.main__properties-slider')
const slider__text = document.querySelector('.main__properties-text')
const slider__link = document.querySelector('.main__properties-link')
const about = document.querySelectorAll('.main__about')
const counter = document.querySelector('.main__counter')
const sales = document.querySelector('.main__sales')

const observer = new IntersectionObserver(
    entries =>{
        entries.forEach(
            entry =>{
                entry.target.classList.toggle("show", entry.isIntersecting)
                if (entry.isIntersecting){
                    observer.unobserve(entry.target)
                }
                
            }
        )
    }
)

slider.forEach(
    sliders =>{
        observer.observe(sliders)
    }
)
about.forEach(
    abouts =>{
        observer.observe(abouts)
    }
)

observer.observe(slider__text)
observer.observe(slider__link)
observer.observe(counter)
observer.observe(sales)
/*End of Intrsection Observer*/
