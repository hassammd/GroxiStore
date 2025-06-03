import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Cart = () => {
    return (

        <>




            <section>

                <div className="custom_container">
                    <div>
                        <span>Home</span>
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        <span>Cart</span>
                    </div>

                </div>
            </section>
            <h2>This is cart page</h2>
        </>
    )
}
export default Cart