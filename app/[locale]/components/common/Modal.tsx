"use client";
import { useState } from "react";
import { Subtitle } from "./Subtitle";
import { Button } from "./Button";
import { IModalProps } from "./types";

export const Modal = ({ title, projects, showMore }: IModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        buttonEvent={() => setShowModal(true)}
        text={showMore}
        type="button"
      />
      {showModal ? (
        <>
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="text-slate-500">
                    <Subtitle tag="h2">{title}</Subtitle>
                  </div>
                  <div 
                    className="close-button" 
                    onClick={() => setShowModal(false)}
                    role="button"
                    aria-label="Close modal"
                    tabIndex={0}
                  >
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  {projects.map((project) => (
                    <div key="project.id">
                      <div className="text-slate-500">
                        <Subtitle tag="h2">{project.domainName}</Subtitle>
                      </div>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed"></p>
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
};
