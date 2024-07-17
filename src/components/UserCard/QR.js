import React, { useState } from "react";

export const QR = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  return (
    <>
      <a
        onClick={() => setShowQRCode(true)}
        style={{ cursor: "pointer", margin: "0 10px" }}
      >
        <i
          className="fas fa-qrcode"
          style={{ color: "#fff", fontSize: "34px" }}
        ></i>
      </a>

      {showQRCode && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
            onClick={() => setShowQRCode(false)} 
          ></div>

          <div className="modal fade show" style={{ display: 'block', zIndex: 1000 }} tabIndex="-1" aria-labelledby="modalLabel">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="modalLabel">დაასკანერე QR კოდი</h1>
                  <button type="button" className="btn-close" onClick={() => setShowQRCode(false)} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA9QAAAPUAQAAAABkr0wpAAAEVUlEQVR4nO3YwZHbMAwFUHbA/rtUB8qMVzZAkPJG8iY55PGgEUUQ7/uGcdv/2doam81ms9lsNpvNZrPZbDabzWaz2Ww2m81ms9lsNpvNZrPZ+97q6l8V7fFYbUtxLtmP7bopm81ms9lsNvuWHd/3qVPEe11tpS4HeN+UzWaz2Ww2m33Xfj/5xayYp8aWS47tamDsbDabzWaz2eyftkuKaBx1k9PHfmw2m81ms9nsP2gfB8MqE+KqAZvNZrPZbDb7T9lTp1WA/nW1RikNTpuy2Ww2m81ms2/aZfUc4PZjbspms9lsNpvNvmWv1qP8mAb714V2fNvzNp/217X3i81ms9lsNpt91Q5iP0a9x7ecYijOp31sUFJsiyhsNpvNZrPZ7Gt2lEWATDwO2tlpbONntPG3THfZbDabzWaz2VfskiJGvSPUnm4NeWI4fNZNb9urH5vNZrPZbDb7rp2b9PwtUkynbeo5RV4FZbPZbDabzWbftfPVocnR6bg1vG25eB1gtdhsNpvNZrPZ1+zjVlvMdidEpMgz4NAq+pWZks1ms9lsNpt93R46lcfUuJSEU+yMNTabzWaz2Wz2J/bphbaY92J+bOPBnqPE3Sk+m81ms9lsNvuqXWbFlv/Cy9/Kdh/zDNsSlM1ms9lsNpt9384XghgC5Lp9ihLE1CDSdjabzWaz2Wz2bftZlmtj9ZE9CbpKkVux2Ww2m81ms+/apWfelpI2nm7r7eqNzWaz2Ww2m/2JXQa8MjqWUe95o6zvurDZbDabzWaz79rRPS7E+Hd8C3Gum0qKvZ/Pimw2m81ms9ns37RXKXKA59t7MUpyis5ms9lsNpvN/szO32uKKGnjyimie6SIfltuxWaz2Ww2m82+age2YqdZMb61cTvYuUFZbDabzWaz2eyr9mrAi7dhflwHGN6O4p4bnM+KbDabzWaz2ezv7Dzl9RfxPDi69rdYecy/is1ms9lsNpv9oZ1nu3lFSaurr0/Dzr+PzWaz2Ww2m33DzhVzz2lC7GPakiwC9Cyw2Ww2m81msz+xy+Ezz9QkJsktH0x54nTLkdlsNpvNZrPZt+wgjkeb2Mcmv23jYzjIbz23Z7PZbDabzWbfsl+fWmk8ifsrXsyFcbev6yIem81ms9lsNvuWPV1oOUUZIstwmAMMv6Ccns2KbDabzWaz2ezv7dXKV7eFOKwyDU7illOw2Ww2m81ms6/aU69BzLNieQzFsT19sNlsNpvNZrNv2vE9tsNwWKbBwNaTZF+3YrPZbDabzWbft+PWdCEGxvYihnEyokyr5wZsNpvNZrPZ7B+093FM3MZOcXASr3xjs9lsNpvNZv+sXR4hlmQlXrCrzmw2m81ms9ns+/YqShbbq91JxmCjOOfZUwmbzWaz2Ww2+5pdVokypJiuvZsp82B5Niuy2Ww2m81ms7+z//Zis9lsNpvNZrPZbDabzWaz2Ww2m81ms9lsNpvNZrPZbPZ/bP8CRYNwRxV/YwQAAAAASUVORK5CYII=" alt="QR Code" style={{ width: '128px', height: '128px' }} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowQRCode(false)}>დახურე QR კოდი</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
