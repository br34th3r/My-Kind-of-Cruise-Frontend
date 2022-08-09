import styles from '../styles/components/SearchModal.module.css'
import Button from './Button';

function SearchModal({ closeModal }) {
    return (
        <div className={styles.searchModal}>
            <div className={styles.modalOverlay} onClick={closeModal} />
            <div className={styles.modalContent}>
                <h2>Start your search here...</h2>
                <form>
                    <label>
                        When can you leave?
                        <input type="date" name="leavingDate" id="leavingDate" />
                    </label>
                    <label>
                        How many nights do you want to stay?
                        <input type="number" name="noOfNights" id="noOfNights" />
                    </label>
                    <label>
                        How flexible are you? (+/- Days)
                        <input type="number" name="flexibility" id="flexibility" />
                    </label>
                    <br />
                    <div className={styles.modalButtons}>
                        <Button onClick={() => console.log("Form Submission")}>Find My Trip</Button>
                        <Button type="secondary" onClick={() => console.log("Form Submission")}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchModal;