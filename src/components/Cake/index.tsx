export const Cake = ({
  candleVisible,
  speedTime = 2,
  playing,
  start,
  stop,
}: {
  candleVisible: boolean;
  speedTime: number;
  playing: boolean;
  start: any;
  stop: any;
}) => {
  return (
    <div className="cake" onClick={!playing ? start : stop}>
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div id="candle" className="candle">
        {candleVisible ? (
          <div
            className="flame"
            style={{
              animation: `flicker 2s ease-in-out alternate infinite`,
              animationDelay: `${2 - speedTime}s`,
            }}
          ></div>
        ) : null}
      </div>
    </div>
  );
};
