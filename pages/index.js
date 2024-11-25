import styles from '../styles/pages/index.module.css';
function Index() {
    return (
    <div className={styles.cta}>
        <span>
            Sample Image 1
        </span>
        <span>
            Sample Image 2
        </span>
        <div>
            <div>
                Your <em>album</em> and <em>artist</em> name
            </div>
            <div>
                on <em>custom</em> album designs
            </div>
            <button>Shop Now</button>
        </div>
        <span>
            Sample Image 3
        </span>
        <span>
            Sample Image 4
        </span>
    </div>
    )
}

export default Index;