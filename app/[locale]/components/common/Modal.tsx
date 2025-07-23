"use client";
import { useState } from "react";
import { Subtitle } from "./Subtitle"
import { Button } from "./Button";
import { IModalProps } from "./types";

export const Modal = ({ title, projects, showMore }: IModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button buttonEvent={() => setShowModal(true)} text={showMore} type="button" />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="text-slate-500">
                    <Subtitle tag="h2">{title}</Subtitle>
                  </div>
                  <div className="text-red-500" onClick={() => setShowModal(false)}>X</div>
                </div>
                <div className="relative p-6 flex-auto">
                  {projects.map((project) => (
                    <div key="project.id">
                      <div className="text-slate-500">
                        <Subtitle tag="h2">{project.domainName}</Subtitle>
                      </div>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      </p>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        {project.projectDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
