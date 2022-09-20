import { animate } from './helpers'

const move = () => {
    const playerBlock = document.querySelector('.player-block')
    const escapeScreen = document.querySelector('.escape-screen')
    let startBottom = 100
    let startLeft = 50

    const start = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', start)
            escapeScreen.style.display = "none"
            document.addEventListener('keydown', movement)
        }
    }

    const movement = (e) => {
        if (e.key === "ArrowUp" && startBottom < window.innerHeight - 350) {
                animate({
                    duration: 100,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                        playerBlock.style.bottom = startBottom + progress * 5 + 'px';
                    }
                });
                startBottom = startBottom + 5

            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowUp" && startBottom > 50) {
            animate({
                duration: 100,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    playerBlock.style.bottom = startBottom - progress * 5 + 'px';
                }
            });
            startBottom = startBottom - 5
            // playerBlock.style.bottom = `${startBottom}px`
        } else if (e.key === "ArrowUp" && startLeft > 8) {
            animate({
                duration: 100,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    playerBlock.style.left = startBottom - progress * 0.5 + '%';
                }
            });
            startBottom = startBottom - 0.5
            // playerBlock.style.left = `${startLeft}px`
        } else if (e.key === "ArrowUp" && startLeft < 92) {
            animate({
                duration: 100,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    playerBlock.style.left = startBottom + progress * 0.5 + '%';
                }
            });
            startBottom = startBottom + 0.5
            // playerBlock.style.left = `${startLeft}px`
        } if (e.key === "Escape") {
            document.removeEventListener('keydown', movement)
            escapeScreen.style.display = "block"
            document.addEventListener('keydown', start)
        } 
    }

    document.addEventListener('keydown', movement)
}

export default move