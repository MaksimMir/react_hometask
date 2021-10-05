import './Dialog.scss';

const Dialog = ({ text }) => {

    return (
        <div className="dialog">
            <div className="dialog__content">
                <p className="dialog__text">
                    {text}
                </p>
            </div>

        </div>
    );
}

export default Dialog;