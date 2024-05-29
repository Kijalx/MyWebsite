'use client'
import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectsCard";
import { Spacer } from "@nextui-org/react";

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts or updates
    }, []);

    return (
        <>
            <title>Portfolio - Projects</title>
            <div className="flex flex-col items-center min-h-screen">
                <section id="about" className="section">
                    <div className="flex flex-wrap justify-center">
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                        <ProjectCard demoLink='https://youtu.be/FlC37lVBrqQ' title='Med-AI' description='The project’s primary objective is to elevate the level of diagnostic accuracy and efficiency in the field of medical science by applying artificial intelligence (AI), particularly in the analysis of medical images, for instance, X-rays, Magnetic Resonance Images (MRIs), and Computer Tomography (CT) scans. It gives automated and reliable assistance to professional and amateur medical practitioners in making timely medical diagnoses. Project scope: Develop and train convolutional neural networks for the classification of different kinds of medical images into more than one category, such as normal findings or lesions, like damaged tissue, injury, or disease. Initially, the cats-vs-dogs binary classification model was trained using the techniques and datasets learned in the Xception network model from Keras. This has been laid to understand CNN and image classification further and to make this medical imaging case study possible with a more advanced but complex multi-class model that is built to achieve better accuracy. The aspects of the project were model development in TensorFlow and Keras, multi-class classification, and implementation with techniques like early stopping to prevent over-fitting. This method combined theoretical studies with practical applications, including activating with layer tuning and softmax activation functions for multi-class classification. The work has eventually condensed to the development of separate models for MRI, CT, and X-ray scans, each capable of singling out specific pathological conditions. This has been practically implemented on a convenient website where a user can upload any kind of medical image and be offered classification at a glance—which practically means that the AI model developed earlier does work effectively in practice. The project utilizes Flask and Tensorflow to provide an advanced solution with CT scans, MRI images, and X-rays for medical image classification. The system at its base level uses intelligent discernment to make out the kind of medical image submitted and then calls on a sophisticated deep learning model to arrive to the correct diagnosis, differentiation from a host of conditions like COVID-19, pneumonia, and different types of tumors. The main conclusion of this work is that AI and specifically deep learning models, such as CNN offer powerful augmentation to the analysis of medical imaging and hence present a valuable tool that offers aid in processing of medical diagnosis. ' githubLink='https://github.com/Kijalx/FYP'></ProjectCard>
                        <Spacer x={5}/>
                    </div>
                </section>
            </div>
        </>
    )
}
