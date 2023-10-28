import Image from "next/image";

export const LoginEntry = (props) => {
    const {logo, name} = props;

    return (
        <div className="tw-p-6 tw-max-w-sm tw-mx-auto tw-bg-white tw-rounded-xl tw-flex tw-items-center tw-space-x-4">
            <div className="tw-shrink-0">
                <Image className="tw-h-12 tw-w-12" src={logo} alt="Logo" />
            </div>
            <div>
                <p className="tw-text-slate-800 tw-inline tw-align-middle">{name}</p>
            </div>
        </div>
    )
}