FROM daptin/daptin:travis

#RUN mkdir -p /opt/daptin/storage/documents
#ADD dist/spa /opt/daptin/dashboard
#ENV DAPTIN_DASHBOARD /opt/daptin/dashboard
#ENV DAPTIN_PORT_VARIABLE PORT

#RUN chmod +x /opt/daptin/daptin
#CMD /opt/daptin/daptin -dashboard /opt/daptin/dashboard -port :8080
#ENTRYPOINT ["/opt/daptin/daptin", "-runtime", "release", "-port", ":8080"]
