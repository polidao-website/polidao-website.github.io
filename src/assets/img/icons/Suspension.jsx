export default function Suspension(props) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M511.573 210.165H482.908C483.943 206.543 484.51 202.724 484.51 198.773C484.51 188.727 480.922 179.505 474.964 172.315C480.923 165.126 484.51 155.904 484.51 145.858C484.51 135.812 480.922 126.591 474.964 119.401C480.923 112.212 484.51 102.989 484.51 92.9435C484.51 74.6394 472.599 59.075 456.124 53.5645V0.335431H373.583V53.5655C357.108 59.076 345.197 74.6404 345.197 92.9445C345.197 102.99 348.784 112.213 354.742 119.402C348.783 126.591 345.197 135.813 345.197 145.859C345.197 155.905 348.784 165.126 354.742 172.316C348.783 179.506 345.197 188.728 345.197 198.774C345.197 202.725 345.763 206.543 346.798 210.166H291.635V171.341H222.843V39.8339C222.843 17.8692 204.973 0 183.01 0H40.2608C18.2971 0 0.427856 17.8692 0.427856 39.8339V472.167C0.427856 494.131 18.2971 512 40.2608 512H183.01C204.973 512 222.843 494.131 222.843 472.167V340.659H291.635V301.35H511.573V210.165ZM375.325 145.858C375.325 139.576 380.436 134.466 386.718 134.466H442.988C449.27 134.466 454.381 139.576 454.381 145.858C454.381 152.14 449.27 157.251 442.988 157.251H386.718C380.436 157.251 375.325 152.14 375.325 145.858V145.858ZM375.325 92.9445C375.325 86.6627 380.436 81.5519 386.718 81.5519H442.988C449.27 81.5519 454.381 86.6627 454.381 92.9445C454.381 99.2273 449.27 104.338 442.988 104.338H386.718C380.436 104.338 375.325 99.2273 375.325 92.9445V92.9445ZM403.71 30.4639H425.994V51.4234H403.71V30.4639ZM375.325 198.773C375.325 192.49 380.436 187.379 386.718 187.379H442.988C449.27 187.379 454.381 192.49 454.381 198.773C454.381 205.055 449.27 210.165 442.988 210.165H386.718C380.436 210.165 375.325 205.055 375.325 198.773V198.773ZM30.5564 472.167V465.546L70.4104 427.062L49.4811 405.389L30.5564 423.664V374.703L70.4104 336.218L49.4811 314.546L30.5564 332.82V283.859L70.4104 245.375L49.4811 223.702L30.5564 241.977V193.013L70.4104 154.529L49.4811 132.857L30.5564 151.132V102.17L70.4104 63.6857L49.4811 42.0132L30.5564 60.2872V39.8339C30.5564 34.4821 34.9099 30.1285 40.2608 30.1285H96.57V481.871H40.2608C34.9099 481.871 30.5564 477.518 30.5564 472.167V472.167ZM183.01 481.871H126.699V30.1285H183.01C188.361 30.1285 192.714 34.4821 192.714 39.8339V60.2872L173.789 42.0122L152.86 63.6847L192.714 102.169V151.131L173.789 132.856L152.86 154.528L192.714 193.012V241.974L173.789 223.699L152.86 245.372L192.714 283.856V332.82L173.789 314.545L152.86 336.217L192.714 374.702V423.663L173.789 405.388L152.86 427.061L192.714 465.545V472.166C192.714 477.518 188.361 481.871 183.01 481.871V481.871ZM261.507 310.531H222.843V201.469H261.507V310.531ZM481.445 271.222H291.635V240.293H481.445V271.222Z"
        fill={props.color || 'black'}
      />
    </svg>
  )
}
