import './Dialog.scss';

const Dialog = ({ name, closeDialogWindow }) => {
    const closeDialog = () => {
        closeDialogWindow()
    }
    return (
        <div className="dialog">
            <div className="dialog__content">
                <p className="dialog__text">
                    {`Сообщение от пользователя ${name} отправлено`}
                </p>
                <button onClick={closeDialog} className="dialog__btn">&#128473;</button>
            </div>

        </div>
    );


}

export default Dialog;