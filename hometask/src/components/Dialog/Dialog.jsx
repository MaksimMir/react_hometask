import './Dialog.scss';

const Dialog = ({ closeDialogWindow }) => {
    const closeDialog = () => {
        closeDialogWindow()
    }
    return (
        <div className="dialog">
            <div className="dialog__content">
                <p className="dialog__text">
                    {`Сообщение от пользователя отправлено`}
                </p>
                <button onClick={closeDialog} className="dialog__btn">&#128473;</button>
            </div>

        </div>
    );


}

export default Dialog;