import React from "react"
import check from "../../img/check.svg"
import AMF from "../../img/AMF.png"
import FPF from "../../img/FPF.png"
import FPCV from "../../img/FPCV.png"
import Orias from "../../img/Orias.png"

export default function Certification({ obj }) { //obj=company
	return (
		<div className="fcc fww g2">
			{obj?.AMF === true &&
				<div className="fc bgDark p07 brsm">
					<img src={check} className="icon_small" />
					<img src={AMF} className="icon_big2" />
				</div>
			}
			{obj?.FPF === true &&
				<div className="fc bgDark p07 brsm">
					<img src={check} className="icon_small" />
					<img src={FPF} className="icon_big2" />
				</div>
			}
			{obj?.FPCV === true &&
				<div className="fc bgDark p07 brsm">
					<img src={check} className="icon_small" />
					<img src={FPCV} className="icon_big2" />
				</div>
			}
			{obj?.Orias === true &&
				<div className="fc bgDark p07 brsm">
					<img src={check} className="icon_small" />
					<img src={Orias} className="icon_big2" />
				</div>
			}
		</div>
	)
}