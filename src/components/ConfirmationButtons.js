export default function ConfirmationButtons({ showOptions, onClickY, onClickN }) {
  return (
    <>
      {showOptions ? (
        <>
          <p>Are you sure?</p>
          <button onClick={() => onClickY()}>Yes</button>
          <button onClick={() => onClickN()}>No</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}