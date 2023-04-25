import React, { useState , useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appInfoAction } from "../store/Slice/appInfoSlice";

const Sidebar = (props) => {
  const dispatch = useDispatch()
  const info = useSelector((state) => state.appInfo.appInfo);
  const [showLangSubMenu, setShowLangSubMenu] = useState(false);
  const [showItemSubMenu, setShowItemSubMenu] = useState(false);

  const handleSubLangMenuClick = () => {
    setShowLangSubMenu(!showLangSubMenu);
  };
  const handleSubItemMenuClick = () => {
    setShowItemSubMenu(!showItemSubMenu);
  };
  const touchRef = useRef(null);

  let startX = 0;
  let startY = 0;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
      dispatch(appInfoAction.handleHamburger(false))
    } else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
      console.log('right swipe');
    }
  };
  return (
    <div
    ref={touchRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className={
        props.showSide === true
          ? "w-64 absolute z-10 top-0  shadow bg-white h-screen"
          : "w-0 absolute z-10 top-0 invisible shadow"
      }
    >
      <div className="gr flex">
        <Link to={"/"}>
          <img className="mx-2 my-5  h-4" src={info.logoPath} alt="TakeMe" />
        </Link>
      </div>
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="relative rounded-sm">
            <Link
              to="/about"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nO2WTU4CQRCFv0u4UMB4HRIgXkPk5yzuNMgGdcMe9SaM4RQw7hzQdFKTEBN6Xs9MKwte8jaTTn+p19XVAycdoS6BIfAOJMCnObFvA6BVJ7ABPAAZ8F3gLTAHrqpCr4FUAP72BuiVhY6tglDofvWjMpVuK0D34XLlTSFet+GTeSfEfqGAp0IlDpjrWVg/Ua5MFgGcWZIHNRTPbmfAFyHq3Lc+8FsNDXXICx94FRGc+MAhwyKXuj79L/DaB/6ICF7W1Vyh4IUPPIgIvvGBW+IACQV/FQ0Qp8cI4HvEh38TEKHSzeeIagdEXvSKdVVorlENPwJu9pdSr2TsLt4OFXUG3FlnKlXOQs5UUdOetlebQql5acOhr1yZk/hr/QBFb6s325D8YwAAAABJRU5ErkJggg==" />
              <span>من نحن؟</span>
            </Link>
          </li>
          <li className="relative rounded-sm">
            <a
              onClick={handleSubLangMenuClick}
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <img
                width={"25px"}
                height={"25px"}
                src="data:image/png;base64,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"
              />
              <span>اللغة - שפה</span>
            </a>
            {showLangSubMenu && (
              <ul
                className=" ml-10 w-40 py-2 bg-white rounded-md"
                style={{ top: "calc(100% + 4px)" }}
              >
                <li>
                  <label
                    htmlFor="submenu1"
                    className="flex items-center p-2 space-x-3 hover:bg-gray-100"
                  >
                    <input type="radio" id="submenu1" className="rounded" />
                    <span>Submenu Item 1</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="submenu2"
                    className="flex items-center p-2 space-x-3 hover:bg-gray-100"
                  >
                    <input type="radio" id="submenu2" className="rounded" />
                    <span>Submenu Item 2</span>
                  </label>
                </li>
              </ul>
            )}
          </li>

          <li className="relative rounded-sm">
            <a
              href="#"
              className="flex items-center p-2 space-x-3 rounded-md"
              onClick={handleSubItemMenuClick}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVR4nO2USwrAIAwF53gVb11vUnuPFBduhEJ42tKPA+5ihrxA4EtEYAdMeMkjyGJzA1aPoBZfht0tiOJOStTBI+jZyeYRqJHZ2b8pqMyI/hxRaq7icEHL+wV59LFrCaKkNF+EyR/KAfSIpb/qKhqGAAAAAElFTkSuQmCC" />
              <span>فلتر</span>
            </a>
            {showItemSubMenu && (
              <ul
                className=" ml-10 w-40 py-2 bg-white rounded-md"
                style={{ top: "calc(100% + 4px)" }}
              >
                <li>
                  <label
                    htmlFor="submenu1"
                    className="flex items-center p-2 space-x-3 hover:bg-gray-100"
                  >
                    <input type="radio" id="submenu1" className="rounded" />
                    <span>Submenu Item 1</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="submenu2"
                    className="flex items-center p-2 space-x-3 hover:bg-gray-100"
                  >
                    <input type="radio" id="submenu2" className="rounded" />
                    <span>Submenu Item 2</span>
                  </label>
                </li>
              </ul>
            )}
          </li>
          <li className="relative rounded-sm">
            <a
              href={info.whatsappLink}
              target="_blank"
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <img
                width={"25px"}
                height={"25px"}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEU0lEQVR4nNWaW4hVVRjHf6acnOxi2mVkJtQoMyKhiFKzsrxllxcfQiMMfAihx8buUA8R3QQJegkyCIvG24v5ohF4qwbFLMWs8JJlOUk6ThRp2o4v/wvWbNa+nH32Pp75w4KZtdb+vvXttf7fZe0D5w+XANuAfcBiYDiDEEOAlUDktV7gZeByBhFe0OJPAE8CX3sGnQBeBa6ixTEbOAOcBR70+qcB6zyD/gY+ACbQgngYOKmF2q6EMA34BPhX8/4BVgA3cx5xGfA48B7wg/e2V4gnaZgEfChDIhlmO3YnTUQb8ArwR4zQx4FngaF1yBoPvAP85cnZDDyQ42U0BFO8x1O6CXgGmAzUGpB7tZxAnyd7F7CgzheTC9cAP0vJt8CMshUAl+rF/OoZ9EWZCuyt9EjwDmAk1WI4sF76vilT8GIJPQKMonpcJ96YE7i7zN04IEMW0RxslD7ziKXhIQndXwXxAnhM+n4DRlMQFwFPyBsdjbnX56geo2WA6VtYVMitylajQDsNtFM9lkvfZ0XjyEQFNOe/H5FvdwngGqrHdJHb8rAbirq6vd6CL1T/BcBB9c9JePY2L78qq30KDCtiyBtekLP0w+F+9R+QUSF0l2xEpLahXmPuUNptbUpsbK2EPp/wrNUUp8SfMTSOmrIF5+q7ihypN2NjY5SZpi1ySUX8mS65u/M+8Joe2Bc7UuQguXmU7zP400gIiJRAZuJ270hNjY35JDeehHBfDv4Uxb0eZzON2K/JbwXG79HYwZRFfpzBn6IcmQkcypJtnHhdu2ATvwocKZRG2/i7CXKuLJnkPQku2IWBAZiirYp0MbA0wQhU5UWq3ELo0vhqysHOmBHHgIvjk9p0fNwufBfgROgmxOYeVqETr9N/0rjNq+pYvRif8HnOXfAxVK7PntuqHMwU3aL/XdVWRU0923vhA3BEA/PqFHiTbgdDUfeQavcqMEo6rKgKRudHCwjtEOGPedXhMuAKqsPcJNf7tAbeblBBpVcznDu6s8TLSA5nAO7SwHZaEz2Bo7sxdLXUJn9/OifRm42dAdc7Imnydk2y3WlF1HSsfsy4N/6fH5Gy1VbGHC+JDWJBE8vVMlzvn0kTxmvCLwyOHdmbNsndpY6l9VBTeuI4YklrIlxgnE9r4MbYzbtfq6fe6rvAaJG5VQw5nifrTQqMX6bM6QRWAf264lkpfl2rv08W6O+Xk7k+48LBVaQvZRniAuOphG/eZsTvga3uTUge6+032Za7kaN0zoQLjKF6ZJXG1klhhz5aRiX2d6esbYTmWN2UCRcYnwqM9WusI/aFKiqxvy/HjtgRy4QLjPb243ALaHZ/TRxxlaH9OiITLjCmtaoNiVLalnoS2w0ZwtoTjkpnA/3tKfrO6Bt9V9GL6zje90jaqeY+RkYibNF+R/blNAHjYp+EXTua4E7r7bc8r2npkQWyj7SQPt0mjhO3uhXg6u3v1U81qrqsGFz4D/bJDKSTBSb2AAAAAElFTkSuQmCC"
              />
              <span>إنضم كصاحب منتج أو خدمة</span>
            </a>
          </li>
          <li className="relative rounded-sm">
            <Link
              to={"/termcondition"}
              className="flex items-center p-2 space-x-3 rounded-md"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACiklEQVR4nKVVyW4TQRCd3EAgThwggJDYF9ndI4vImSqnXWUHRQQ4IaQAPxDMciIEbvAHSIAw4gcCIgEphAOb+Am2r4AYDjZERjXd43VmYicltdQztfar19WelyInC6f3KeBrCuitQv6qgX7Lkr1CWlHAlYwxe71hReV5j0auKuC/GrmZvmhNIz/3x2n/QMH9gM5r5FXnXNfICxppJhPQ0ezk5DZZspd/Tld3yVazwOfSgyNddxWJw8sMlg6sV1AuoIMaaTE6jUCaUrkEpzVVoFvekKKQ5yL/vpM4zENYNhK8Owk3FdKvXKGwu0NBzyJYvE2KBlpysaodVKR/0qwkzHVAZxTwew1cC2kK/FkBXYyz9fPmkEJuCAMFGU+a4jIuxDko5PtJFFXAj2J9gF5Ym+JVgWfFMWCm1zCLpbMtugLdkUt1yphdGos3FNIfBfw4NkFQuhz6AS9Lth/hx0T5cB80SB+tIc336owxW7wEsfckPOU3L8QVuXnCmO19CcDquhgxgEgsd4KaF9EzNgFanR+UR4dJMDY2tSOiq9Dqu3xksXQk5gQfkiDK5/NbkxLkxs0xSwL60m4y0KVeQ1UoTnfMpLutJgPfTG0y8pWOJnMllaZA91Im6cN0mtKsJ1XZsUx1GVxxDj6WphTSO8HUNp4+aeQLcbbCxq6LFv4EfuoyLnqbkxGF/NrFetKuMCiPtoYd8txGo2ugedfcn9KrLqWM2Na4Hj7JiEK+3R73xelYKzuX3IMDtCSDa92qBXPgVx0PTiXVQeZP2EwLV0MYIbNFuC2XUZY/UT4uVAx1yI0IlsTKeyVnzE4F/GCQR9/ZVIcdJ6HYl45mFfIbuZX2PeCa2y+HuoiKCfIfOPxmctAVuFkAAAAASUVORK5CYII=" />
              <span>العقد وشروط الاستخدام</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
